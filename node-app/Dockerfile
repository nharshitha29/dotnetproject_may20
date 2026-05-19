FROM node:24.11.1-alpine
LABEL project=learning
LABEL version=8.0
EXPOSE 3000
WORKDIR /app
COPY . /app
RUN npm install
CMD ["node","app.js"]