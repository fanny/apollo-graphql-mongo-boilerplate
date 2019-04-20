FROM node:latest

WORKDIR /graphql-server-example

COPY . .

ENV PORT 4000

RUN npm install

COPY .docker/mongo_scripts/wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh
