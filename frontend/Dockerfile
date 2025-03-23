# Étape 1 : Build Angular
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serve Angular avec NGINX
FROM nginx:alpine

# ⚠️ Très important : vider le dossier par défaut de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers Angular générés vers le dossier NGINX
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
