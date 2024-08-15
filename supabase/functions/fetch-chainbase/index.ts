// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const BASE_URI = "https://api.chainbase.com/api/v1";

const HEADERS = {
  "X-API-KEY": Deno.env.get('CHAINBASE_API_KEY'),
  "Content-Type": "application/json",
};

const QUERY_ID = "690066";


async function executeQuery(coinType: string, objectIdPrefix: string) {
  const queryData = {
    queryParameters: {
      "coin-type": coinType,
      "object-id-prefix": objectIdPrefix,
    },
  };

  return await fetch(
    `${BASE_URI}/query/${QUERY_ID}/execute`,
    { method: "POST", headers: HEADERS, body: JSON.stringify(queryData) }
  )
    .then((response) => response.json())
    .then((data) => data.data[0].executionId);
}

async function checkStatus(executionId) {
  return await fetch(
    `${BASE_URI}/execution/${executionId}/status`,
    { headers: HEADERS }
  )
    .then((response) => response.json())
    .then((data) => data.data[0]);
}

async function getResults(executionId) {
  return await fetch(
    `${BASE_URI}/execution/${executionId}/results`,
    { headers: HEADERS }
  ).then((response) => response.json());
}

async function main() {
}

function generateHexPrefixes(): string[] {
  const characters = "0123456789abcdef";
  const prefixes = [];

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      for (let k = 0; k < 16; k++) {
        prefixes.push(`0x${characters[i]}${characters[j]}${characters[k]}`);
      }
    }
  }

  // // try only 1 character
  // for (let i = 0; i < 16; i++) {
  //   prefixes.push(`0x2b${characters[i]}`);
  // }

  return prefixes;
}

async function executeQueryForAllPrefixes(coinType: string) {
  const prefixes = generateHexPrefixes();
  const nHoldersList = [];

  for (const prefix of prefixes) {
    console.log(`Executing query for prefix: ${prefix}`);
    const executionId = await executeQuery(coinType, prefix);
    let status;
    do {
      const statusResponse = await checkStatus(executionId);
      status = statusResponse.status;
      const progress = statusResponse.progress;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`${prefix}: ${status} ${progress}%`);
    } while (status !== "FINISHED" && status !== "FAILED");

    if (status === "FINISHED") {
      const result = await getResults(executionId);
      nHoldersList.push(result.data.data[0][0]);
    }
  }

  const nTotalHolders = nHoldersList.reduce((acc, n) => acc + n, 0);

  return nTotalHolders;
}

Deno.serve(async (req) => {
  // const { name } = await req.json();

  const nTotalHolders = await executeQueryForAllPrefixes("0x2::sui::SUI");
  console.log("nTotalHolders:", nTotalHolders);

  return new Response(
    JSON.stringify({ nTotalHolders }),
    { headers: { "Content-Type": "application/json" } },
  );
});

