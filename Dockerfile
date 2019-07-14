
FROM node

# Create app directory
WORKDIR /usr/src/app

# Copy package file with dependencies
COPY package*.json .

# Copy package file with dependencies
# RUN yarn
RUN yarn install --production

# Copy app to docker
COPY . ./

# Build app
RUN yarn build

# Install app server
RUN yarn global add serve

# Expose port to listen server
EXPOSE 3000

# Run app
CMD serve -s build -p 3000