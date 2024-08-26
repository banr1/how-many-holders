// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { stringify } from "https://deno.land/std@0.210.0/csv/mod.ts";

const BASE_URI = "https://api.chainbase.com/api/v1";

const HEADERS = {
  "X-API-KEY": Deno.env.get('CHAINBASE_API_KEY'),
  "Content-Type": "application/json",
};

const QUERY_ID = "690112";

type DateStr = `${number}-${number}-${number}`;

async function executeQuery(date: DateStr) {
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

function recordsToCSV(records: any[]): string {
  const headers = ["date", "contractAddress", "nHolders"];
  const rows = records.map(record => [record.date, record.contractAddress, record.nHolders]);
  return stringify([headers, ...rows]);
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const format = 'csv';

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

  if (format === "csv") {
    const csvContent = recordsToCSV(records);
    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=records.csv"
      },
    });
  } else {
    return new Response(
      JSON.stringify({ records }),
      { headers: { "Content-Type": "application/json" } },
    );
  }
});
