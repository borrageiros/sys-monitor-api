# Usa una imagen base oficial de Node.js
FROM node:21

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usa la aplicación
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "app.js"]
