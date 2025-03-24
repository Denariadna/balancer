# Используем образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все исходники в контейнер
COPY . .

# Открываем порт для сервера
EXPOSE 6080

# Запускаем приложение
CMD ["node", "src/app/main.js"]
