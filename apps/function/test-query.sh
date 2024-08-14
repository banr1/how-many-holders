#!/bin/bash

apiKey="2fd2PbowBu7wirU55aw37ewZpEd"
queryId="690066"
urlBase="https://api.chainbase.com/api/v1"
contentType="application/json"

executeQuery() {
    local queryData="{\"queryParameters\":{\"Object ID Prefix\":\"0x2b00\",\"Coin Type\":\"0x2::sui::SUI\"}}"
    local response=$(curl -s -X POST "$urlBase/query/$queryId/execute" \
        -H "X-API-KEY: $apiKey" \
        -H "Content-Type: $contentType" \
        -d "$queryData")
    echo $response | jq -r '.data[0].executionId'
}

checkStatus() {
    local executionId=$1
    local response=$(curl -s -X GET "$urlBase/execution/$executionId/status" \
        -H "X-API-KEY: $apiKey")
    echo $response
}

getResults() {
    local executionId=$1
    local response=$(curl -s -X GET "$urlBase/execution/$executionId/results" \
        -H "X-API-KEY: $apiKey")
    echo $response
}

main() {
    local executionId=$(executeQuery)
    local status
    local progress
    until [[ "$status" == "FINISHED" || "$status" == "FAILED" ]]; do
        local statusResponse=$(checkStatus $executionId)
        status=$(echo $statusResponse | jq -r '.data[0].status')
        progress=$(echo $statusResponse | jq -r '.data[0].progress')
        sleep 1
        echo "${status} ${progress}%"
    done

    local results=$(getResults $executionId)
    echo $results | jq
}

main
