FROM node:lts-alpine

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY .env /app/.env

COPY src /app/src
COPY prisma /app/prisma

WORKDIR /app

RUN yarn install

EXPOSE 8080
CMD ["yarn", "start"]
