# Build images docker
docker-compose build 
docker compose up

# Run migration
npm run typeorm:run-migrations


#Run tests unit
npm run test

#Run test e2e
npm run test:e2e
