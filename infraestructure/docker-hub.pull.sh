docker tag node:16.17.1 aalbuja/node:latest
docker push aalbuja/node:latest

docker tag postgres:alpine aalbuja/postgres:latest
docker push aalbuja/postgres:latest