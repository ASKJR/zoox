FROM node:12-alpine

LABEL maintainer="Alberto Kato"

WORKDIR /application

# Base system dependencies
RUN apk add --no-cache \
    curl \
    git \
    bash

RUN apk upgrade libssl1.0 --update-cache

RUN apk add wget ca-certificates


COPY package*.json ./

RUN npm install -y

COPY . .

EXPOSE 80
