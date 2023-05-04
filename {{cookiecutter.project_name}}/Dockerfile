FROM node:16-alpine as build

# Establece variables de entorno para npm
ENV CI=true \
    NODE_ENV=production

WORKDIR /app

# Copia solo los archivos package.json y package-lock.json para aprovechar el caché de Docker
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm ci --only=production

# Copia el resto del código fuente del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Utiliza una versión específica de nginx en lugar de la última
FROM nginx:1.21-alpine

# Copia los archivos de construcción y la configuración de nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80
