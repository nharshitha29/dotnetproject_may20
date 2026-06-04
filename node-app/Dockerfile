FROM node:24-alpine
WORKDIR /app
COPY . /app
RUN npm install

FROM cgr.dev/chainguard/node:latest  
LABEL project=learning
LABEL version=8.0
EXPOSE 3000
WORKDIR /spc
COPY . /spc
CMD ["app.js"]