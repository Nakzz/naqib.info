# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
# Bundle app source
COPY . .

# Bundle app source

# EXPOSE 7001
# EXPOSE 7002

# CMD [ "npm", "run-script" "build" ]

CMD [ "node", "server.js" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2