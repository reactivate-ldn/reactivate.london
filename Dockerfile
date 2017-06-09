FROM node:boron
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
