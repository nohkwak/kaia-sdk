curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/eth/subscribe' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "eth_subscribe",
  "id": 1,
  "jsonrpc": "2.0",
  "params": ["newHeads"]
}'
