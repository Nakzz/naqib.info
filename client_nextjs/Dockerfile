# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2


# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /home/node

RUN apk add --no-cache yarn g++ make libpng-dev pkgconfig autoconf automake libtool nasm build-base zlib-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN yarn install

RUN yarn build 


# CMD [ "ls", "/data" ] 
CMD [ "yarn", "start"]



# docker build -t naqib.info/client:v1.2 .
# docker run -p 8001:7001 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/client:v1.2