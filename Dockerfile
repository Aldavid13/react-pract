FROM nginx:1.23.1-alpine
RUN cat /usr/share/nginx/html
COPY build/ /usr/share/nginx/html
RUN cat /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN cat /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


