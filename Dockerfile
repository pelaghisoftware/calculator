#Build stage

FROM node:latest AS BUILD
WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build

# Package stage

FROM nginx:latest
EXPOSE 8081
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=BUILD /usr/app/build /usr/share/nginx/html