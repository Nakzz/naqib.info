# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.183.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12 (overriden in .devcontainer)
ARG VARIANT="20"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# Configure apt
ENV DEBIAN_FRONTEND=noninteractive

# Installing additional OS Packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl \
    git-core \
    gnupg \
    locales \
    zsh \
    wget \
    tree \
    jq \
    fonts-powerline \
    # set up locale
    && locale-gen en_US.UTF-8 && fc-cache -vf 
    
ARG MONGO_TOOLS_VERSION=6.0
RUN . /etc/os-release \
    && curl -sSL "https://www.mongodb.org/static/pgp/server-${MONGO_TOOLS_VERSION}.asc" | gpg --dearmor > /usr/share/keyrings/mongodb-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] http://repo.mongodb.org/apt/debian ${VERSION_CODENAME}/mongodb-org/${MONGO_TOOLS_VERSION} main" | tee /etc/apt/sources.list.d/mongodb-org-${MONGO_TOOLS_VERSION}.list \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y mongodb-mongosh \
    && if [ "$(dpkg --print-architecture)" = "amd64" ]; then apt-get install -y mongodb-database-tools; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*


ENV DEBIAN_FRONTEND=dialog
ENV PYTHON=/usr/bin/python3

RUN mkdir /data && mkdir /data/naqib.info_static_content


ENV NODE_VERSION 12.20.0

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH

# ENV SHELL=/bin/zsh

# Use Yarn 2
# RUN yarn set version berry
RUN npm install --global yarn
# RUN nvm install 
# RUN nvm use

ARG USER="node"
ARG GROUP="node"

USER ${USER}

# Make variables available in Shell Env
ENV USER=${USER}
ENV GROUP=${GROUP}

