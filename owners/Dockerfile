# Stage 1 - the build process
FROM node:12-alpine as builder

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

RUN yarn build

# Stage 2 - the production environment
FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --ignore-scripts --prefer-offline
RUN mkdir dist
COPY --from=builder /usr/src/app/dist dist

CMD ["yarn", "start"]
