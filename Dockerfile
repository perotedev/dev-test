FROM node:latest

# RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app
