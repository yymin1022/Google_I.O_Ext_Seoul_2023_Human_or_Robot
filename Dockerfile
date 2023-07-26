FROM node:18.16.1 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.25.1
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx /etc/nginx/conf.d
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]