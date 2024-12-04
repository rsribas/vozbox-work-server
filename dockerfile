FROM node:alpine
RUN mkdir /opt/app
WORKDIR /opt/app
COPY package.json /opt/app
RUN npm install
COPY . /app
CMD ["npm", "start"]
