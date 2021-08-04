# Stage 1 - the build process
FROM node:10 as compile-server
WORKDIR /usr/src/app
COPY ./package*.json .
# this is totally fine, just don't look
RUN npm install
COPY . .
#this is unironically the hackiest thing I've ever written
RUN sed -i 's/req?: Request;/req: Request;/' node_modules/@types/express-serve-static-core/index.d.ts
RUN npm run build

CMD [ "npm", "start" ]