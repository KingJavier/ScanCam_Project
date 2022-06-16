FROM node

COPY . .

CMD ["npm", "start"]

COPY package.json ./

RUN npm install

EXPOSE 3001