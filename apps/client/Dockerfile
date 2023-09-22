# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2


# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /opt/app

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
# CMD [ "yarn", "start"]


# # Install dependencies only when needed
# FROM node:${NODE_VERSION}-alpine AS builder

# WORKDIR /opt/app
# COPY package*.json ./
# RUN yarn install

# RUN yarn build

# # Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS runner

# ARG X_TAG
# WORKDIR /opt/app
# ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
# # CMD ["node_modules/.bin/next", "start"]
CMD [ "yarn", "start"]
// to-do: build the compiled filed in a directory to pull in built artifact/ 

