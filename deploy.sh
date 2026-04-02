#!/bin/bash
# Script de Deploy Automático - Garcia Alves Advocacia

echo "🚀 Iniciando deploy..."

# 1. Puxar as últimas alterações do Github
git pull origin main

# 2. Instalar novas dependências (se houver)
npm install

# 3. Sincronizar o banco de dados (SQLite)
# Este comando garante que novas tabelas (como Footer e WhatsApp) sejam criadas
echo "🔄 Sincronizando banco de dados..."
npm run payload db:push

# 4. Gerar o build do Next.js
echo "🏗️  Gerando build..."
npm run build

# 5. Reiniciar o processo no PM2
echo "♻️  Reiniciando PM2..."
pm2 reload garciaalves

echo "✅ Deploy concluído com sucesso!"
