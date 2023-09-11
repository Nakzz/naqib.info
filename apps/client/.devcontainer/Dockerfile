# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.183.0/containers/javascript-node/.devcontainer/base.Dockerfile

# # [Choice] Node.js version: 16, 14, 12 (overriden in .devcontainer)
# ARG VARIANT=20-bullseye
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}
FROM node:14

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
    python2 \
    yarn g++ pkg-config build-essential make libpng-dev autoconf automake libtool nasm zlib1g-dev \
    # set up locale
    && locale-gen en_US.UTF-8 && fc-cache -vf

ENV DEBIAN_FRONTEND=dialog
# ENV PYTHON=/usr/bin/python2

# ENV CPPFLAGS=-DPNG_ARM_NEON_OPT=0
# ENV NODE_VERSION 14.15.3

# Install nvm with node and npm
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} && nvm use ${NODE_VERSION}"
SHELL ["/bin/bash", "--login", "-c"]

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN nvm install 14.15.3
# Use Yarn 2
# RUN yarn set version berry
# RUN npm install --global yarn

ARG USER="node"
ARG GROUP="node"

USER ${USER}

# Make variables available in Shell Env
ENV USER=${USER}
ENV GROUP=${GROUP}