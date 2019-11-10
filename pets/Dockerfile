FROM node:10-alpine

ENV NODE_ENV=production

RUN npm run build

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "start"]