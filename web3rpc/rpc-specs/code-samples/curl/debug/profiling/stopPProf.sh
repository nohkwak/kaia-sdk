curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/stopPProf' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_stopPProf",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
