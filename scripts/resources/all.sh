set -e
mkdir -p ./assets/markdown/generated
node ./scripts/resources/client_libraries.js
node ./scripts/resources/schemas.js
node ./scripts/resources/ott.js
./scripts/resources/support_matrix.sh
