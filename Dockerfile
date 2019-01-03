FROM node:10
LABEL maintainer="Alexandre Cunha C. Oliveira - Henrique franzoni keppel - Lucas Medeiros - Prince Sanis"
WORKDIR /usr/app

COPY package*.json ./
RUN npm install npm@latest -g && npm install

ENV NODE_ENV=production
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
