#!/bin/bash
# Script de Deploy Automático - Garcia Alves Advocacia

echo "🚀 Iniciando deploy..."

# 1. Puxar as últimas alterações do Github
git pull origin main

# 2. Instalar novas dependências (se houver)
npm install

# 3. Sincronizar o banco de dados (SQLite)
echo "🔄 Sincronizando banco de dados..."
# Tenta o db:push padrão com um bypass para o erro do undici no Node 20
NODE_OPTIONS="--no-warnings" npm run payload db:push || echo "⚠️  Aviso: Sincronização automática falhou. Aplicando correções manuais..."

# Garante que a tabela de Audit Logs existe (Fallback manual)
sqlite3 /home/garciaalves/database/payload.db <<EOF
CREATE TABLE IF NOT EXISTS "audit_logs" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "user_id" text,
    "action" text NOT NULL,
    "collection_name" text,
    "document_id" text,
    "details" text,
    "updated_at" text DEFAULT (CURRENT_TIMESTAMP),
    "created_at" text DEFAULT (CURRENT_TIMESTAMP)
);
EOF

# 4. Gerar o build do Next.js
echo "🏗️  Gerando build..."
npm run build

# 5. Reiniciar o processo no PM2
echo "♻️  Reiniciando PM2..."
# Carrega o nvm/node se necessário para encontrar o pm2
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
pm2 reload garciaalves || ~/.npm-global/bin/pm2 reload garciaalves || echo "⚠️  Aviso: O PM2 não pôde ser reiniciado automaticamente."

echo "✅ Deploy concluído com sucesso!"
