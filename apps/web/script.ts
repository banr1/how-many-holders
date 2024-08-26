import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BASE_URI = "https://api.chainbase.com/api/v1";

const HEADERS = {
  "X-API-KEY": '2fd2PbowBu7wirU55aw37ewZpEd',
  "Content-Type": "application/json",
};

const QUERY_ID = "690112";

type DateStr = `${number}-${number}-${number}`;

async function executeQuery(date: DateStr): Promise<string> {
  const queryData = { queryParameters: { date } };
  return await fetch(
    `${BASE_URI}/query/${QUERY_ID}/execute`,
    { method: "POST", headers: HEADERS, body: JSON.stringify(queryData) }
  )
    .then((response) => response.json())
    .then((data) => data.data[0].executionId);
}

async function checkStatus(executionId: string) {
  return await fetch(
    `${BASE_URI}/execution/${executionId}/status`,
    { headers: HEADERS }
  )
    .then((response) => response.json())
    .then((data) => data.data[0]);
}

async function getRecords(executionId: string) {
  const results = await fetch(
    `${BASE_URI}/execution/${executionId}/results`,
    { headers: HEADERS }
  ).then((response) => response.json());

  const recordsAsArray = results.data.data!;
  const records = recordsAsArray.map((record: any[]) => {
    return {
      date: record[0],
      contractAddress: record[1],
      nHolders: record[2],
    };
  });

  return records;
}

async function writeRecords(records: any[]) {
  for (const record of records) {
    await prisma.nHolders.create({
      data: {
        date: record.date,
        contractAddress: record.contractAddress,
        nHolders: record.nHolders,
      },
    });
  }
}

async function main() {
  const executionId = await executeQuery('2024-08-17');
  let status = await checkStatus(executionId);
  do {
    const statusResponse = await checkStatus(executionId);
    status = statusResponse.status;
    const progress = statusResponse.progress;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`${status} ${progress} %`);
  } while (status !== "FINISHED" && status !== "FAILED");

  const records = await getRecords(executionId);
  console.log(records[0]);

  await writeRecords(records.slice(0, 3));
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
