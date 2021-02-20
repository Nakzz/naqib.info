# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2


# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /home/node

RUN apk add --no-cache yarn g++ make libpng-dev pkgconfig autoconf automake libtool nasm build-base zlib-dev
# && \
#     wget -O dumb-init -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
#     chmod +x dumb-init
# ADD . /home/node
# RUN yarn install && yarn build && yarn cache clean

# NOTE: docker-compose is not mounting the drive properly. So hardcoding here.
# VOLUME ["/data"] 
WORKDIR /home/node

# COPY --from=build /home/node /home/node
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY ../cert ../cert

# Bundle app source
COPY . .

RUN yarn install


# RUN ls -l /data
# CMD ls -l /data

# RUN yarn build
# RUN yarn start

RUN yarn dev

# CMD [ "ls", "/data" ] 
# CMD [ "yarn", "start" ] 


# EXPOSE 3000
# EXPOSE 27017
