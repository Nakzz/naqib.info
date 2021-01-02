# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14.15.3
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build container
# FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

# WORKDIR /home/node

# RUN apk add --no-cache build-base python2 yarn && \
#     wget -O dumb-init -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
#     chmod +x dumb-init
# ADD . /home/node
# RUN yarn install && yarn build && yarn cache clean

# Runtime container
FROM node:${NODE_VERSION}

WORKDIR /home/node

# COPY --from=build /home/node /home/node
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY ../cert ../cert

RUN npm install
# Bundle app source
COPY . .

EXPOSE 3000
# EXPOSE 27017
# CMD [ "npm", "run-script" "build" ]
CMD [ "node", "server.js" ]
# CMD ["./dumb-init", "node", "server.js"]
# docker build -t naqib.info/cms:v1.1 .
# docker run -p 3000:3000 --net="host"  naqib.info/cms:v1.1