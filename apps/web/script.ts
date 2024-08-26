const { PrismaClient } = require('@prisma/client');

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

async function getResults(executionId: string) {
  return await fetch(
    `${BASE_URI}/execution/${executionId}/results`,
    { headers: HEADERS }
  ).then((response) => response.json());
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

  const results = await getResults(executionId);
  console.log(results);
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
