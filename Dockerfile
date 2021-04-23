FROM node:lts-alpine

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY src /app/src

WORKDIR /app

RUN yarn install

CMD ["yarn", "start"]
