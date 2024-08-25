FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN rm -rf node_modules/
RUN npm install

COPY . .

EXPOSE 3001

# Start the application
CMD ["npm", "start"]
