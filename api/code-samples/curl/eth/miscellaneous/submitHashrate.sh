curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/eth/submitHashrate' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_submitHashrate",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["0x5", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"]
}'
