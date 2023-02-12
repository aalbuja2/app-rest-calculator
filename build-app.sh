# Build images docker
docker-compose build 
docker compose up

# Run migration
npm run typeorm:run-migrations


#Run tests unit
npm run test

#Run test e2e
npm run test:e2e

# Code analysis coverage
npm run test:cov


#Despliege de la imagen en Docker-Hub
docker tag node:16.17.1 aalbuja/node:latest
docker push aalbuja/node:latest

docker tag postgres:alpine aalbuja/postgres:latest
docker push aalbuja/postgres:latest


#Despliegue de la applicación en el cluster de kubernetes
helm install -f node/values.yaml node-chart ./infraestructure/node
helm install postgres-chart infraestructure/postgres/ --values /infraestructure/postgres/values.yaml