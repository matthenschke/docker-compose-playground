from node:12-slim

# Create app directory
RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
RUN npm install 



# start app
CMD ["node", "app.js"]


