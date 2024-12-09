FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
