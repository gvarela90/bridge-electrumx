FROM node:12-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY server.js ./

EXPOSE 3000

CMD ["npm", "start"]