#!/bin/bash

# Detener procesos existentes
pkill -f "vite"
pkill -f "php artisan serve"

# Limpiar cache y instalaciones previas
rm -rf node_modules
rm -rf vendor
rm -f package-lock.json
rm -f composer.lock
rm -f vite.config.js.timestamp-*

# Instalar dependencias
composer install
npm install

# Reconstruir cache
php artisan optimize:clear

echo "¡Instalación completada! Ejecuta: npm run dev"