#!/bin/bash
# Script de Deploy Automático - Garcia Alves Advocacia

echo "🚀 Iniciando deploy..."

# 1. Puxar as últimas alterações do Github
git pull origin main

# 2. Instalar novas dependências (se houver)
npm install

# 3. Sincronizar o banco de dados (SQLite)
echo "🔄 Sincronizando banco de dados..."
# Variável com o caminho do banco para facilitar a manutenção
DB_PATH="/home/garciaalves/database/payload.db"

# Tenta o db:push padrão
NODE_OPTIONS="--no-warnings" npm run payload db:push 2>/dev/null || echo "⚠️  Aviso: Sincronização automática via Payload falhou. Aplicando correções manuais..."

# Garante que as tabelas e colunas de Audit Logs existem (Fallback manual)
sqlite3 $DB_PATH <<EOF
-- Cria a tabela de logs se não existir
CREATE TABLE IF NOT EXISTS "audit_logs" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "user_id" integer REFERENCES "users"("id"),
    "action" text NOT NULL,
    "collection_name" text,
    "document_id" text,
    "details" text,
    "updated_at" text DEFAULT (CURRENT_TIMESTAMP),
    "created_at" text DEFAULT (CURRENT_TIMESTAMP)
);

-- Garante que as colunas internas de relacionamento (RELs) existam
-- O comando de erro será silenciado se a coluna já existir
ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "audit_logs_id" integer REFERENCES "audit_logs"("id");
ALTER TABLE "payload_preferences_rels" ADD COLUMN "audit_logs_id" integer REFERENCES "audit_logs"("id");
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
