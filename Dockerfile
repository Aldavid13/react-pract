FROM node:18.9 as build
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.23.1-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


