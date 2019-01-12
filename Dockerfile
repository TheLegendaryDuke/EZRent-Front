FROM node:8.15.0-alpine
MAINTAINER z.aoran@gmail.com
VOLUME /tmp
EXPOSE 3000
COPY . .
ENTRYPOINT ["npm", "start"]
