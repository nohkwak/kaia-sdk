curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/upperBoundGasPrice' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_upperBoundGasPrice",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
