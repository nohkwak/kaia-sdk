curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/klay_getBlockWithConsensusInfoByNumberRange' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getBlockWithConsensusInfoByNumberRange",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [1, 1]
}'
