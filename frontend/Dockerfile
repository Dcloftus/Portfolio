# Build the React app
FROM node:20-alpine AS build

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .

# CRA bakes env vars in at build time; this overrides the localhost value in frontend/.env
ARG REACT_APP_API_BASE_URL=https://api.danielloftus.dev
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN npm run build

# Serve the build (and the mounted media folder) with nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend/build /usr/share/nginx/html

EXPOSE 80
