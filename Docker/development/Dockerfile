FROM node:8.15.1-jessie

WORKDIR /app

COPY package.json .
RUN npm install --quiet

COPY . .
