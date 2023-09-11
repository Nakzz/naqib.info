#!/bin/sh

# Build the docker images
docker-compose build

# Run tests
docker-compose -f docker-compose.prod.yml run backend npm test
docker-compose -f docker-compose.prod.yml run website npm test

# If the tests pass, push to docker registry
docker-compose push
