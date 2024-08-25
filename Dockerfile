FROM node:18.20.2

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN rm -rf node_modules/
RUN npm install --only=production


COPY . .

EXPOSE 3001

# Start the application
CMD ["npm", "start"]
