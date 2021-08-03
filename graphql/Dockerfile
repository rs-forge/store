# Stage 1 - the build process
FROM node:10 as compile-server
WORKDIR /usr/src/app
COPY . .
# this is totally fine, just don't look
RUN npm install --legacy-peer-deps
RUN npm run build

CMD [ "npm", "start" ]