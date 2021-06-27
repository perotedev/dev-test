#!/bin/bash

#docker-compose exec mongo /bin/bash
docker-compose exec app bash -c "npm install mongo-seeding-cli && seed -u 'mongodb://mongo:27017/devtest' --db-username root --db-password example --drop-database ./fake-database.js"
