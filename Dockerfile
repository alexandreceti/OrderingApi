FROM node:10-alpine
LABEL maintainer="Alexandre Cunha C. Oliveira - Henrique franzoni keppel - Lucas Medeiros - Prince Sanis"
WORKDIR /usr/app

COPY package*.json ./
RUN npm install npm@latest -g && npm install && npm cache clean --force

ENV NODE_ENV=production
COPY . .
CMD ["npm", "start"]

FROM node:10-alpine
COPY --from=0 /usr/app /usr/app
WORKDIR /usr/app
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]