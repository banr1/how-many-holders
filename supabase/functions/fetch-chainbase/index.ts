// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const headers = {
  "X-API-KEY": Deno.env.get('CHAINBASE_API_KEY'),
  "Content-Type": "application/json",
};

async function executeQuery(queryId) {
  const queryData = {
    queryParameters: {
      "object-id-prefix": "0x2b1",
      "coin-type": "0x2::sui::SUI"
    },
  };

  return await fetch(
    `https://api.chainbase.com/api/v1/query/${queryId}/execute`,
    { method: "POST", headers, body: JSON.stringify(queryData) }
  )
    .then((response) => response.json())
    .then((data) => data.data[0].executionId);
}

async function checkStatus(executionId) {
  return await fetch(
    `https://api.chainbase.com/api/v1/execution/${executionId}/status`,
    { headers }
  )
    .then((response) => response.json())
    .then((data) => data.data[0]);
}

async function getResults(executionId) {
  return await fetch(
    `https://api.chainbase.com/api/v1/execution/${executionId}/results`,
    { headers }
  ).then((response) => response.json());
}

async function main() {
}

Deno.serve(async (req) => {
  const { name } = await req.json();
  const data = {
    message: `Hello ${name}!`,
  };

  const queryId = "690066";
  const executionId = await executeQuery(queryId);
  let status;
  do {
    const statusResponse = await checkStatus(executionId);
    status = statusResponse.status;
    const progress = statusResponse.progress;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`${status} ${progress} %`);
  } while (status !== "FINISHED" && status !== "FAILED");

  const results = await getResults(executionId);
  console.log(results);

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
