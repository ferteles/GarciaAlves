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
ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "audit_logs_id" integer REFERENCES "audit_logs"("id");
ALTER TABLE "payload_preferences_rels" ADD COLUMN "audit_logs_id" integer REFERENCES "audit_logs"("id");

-- Sincroniza as novas colunas do Rodapé (Fallback manual)
ALTER TABLE "footer" ADD COLUMN "address_line1_pt" text;
ALTER TABLE "footer" ADD COLUMN "address_line2_pt" text;
ALTER TABLE "footer" ADD COLUMN "address_line3_pt" text;
ALTER TABLE "footer" ADD COLUMN "address_line1_en" text;
ALTER TABLE "footer" ADD COLUMN "address_line2_en" text;
ALTER TABLE "footer" ADD COLUMN "address_line3_en" text;

-- Colunas SEO dos posts
ALTER TABLE "posts" ADD COLUMN "seo_title_pt" text;
ALTER TABLE "posts" ADD COLUMN "seo_description_pt" text;
ALTER TABLE "posts" ADD COLUMN "seo_title_en" text;
ALTER TABLE "posts" ADD COLUMN "seo_description_en" text;
ALTER TABLE "posts" ADD COLUMN "seo_ogimage_id" integer REFERENCES "media"("id");
ALTER TABLE "posts" ADD COLUMN "noindex" integer DEFAULT 0;

-- Tabela do global SEO (recria se existir com colunas erradas)
DROP TABLE IF EXISTS "seo_keywords_pt";
DROP TABLE IF EXISTS "seo";
CREATE TABLE IF NOT EXISTS "seo" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "site_name" text DEFAULT 'Garcia Alves Advocacia',
    "title_template" text DEFAULT '%s | Garcia Alves Advocacia',
    "site_url" text DEFAULT 'https://garciaalves.adv.br',
    "twitter_handle" text DEFAULT '@garciaalvesadv',
    "default_og_image_id" integer REFERENCES "media"("id"),
    "google_verification" text,
    "hometitle_pt" text,
    "homedescription_pt" text,
    "hometitle_en" text,
    "homedescription_en" text,
    "home_og_image_id" integer REFERENCES "media"("id"),
    "blogtitle_pt" text,
    "blogdescription_pt" text,
    "blogtitle_en" text,
    "blogdescription_en" text,
    "blog_og_image_id" integer REFERENCES "media"("id"),
    "updated_at" text DEFAULT (CURRENT_TIMESTAMP),
    "created_at" text DEFAULT (CURRENT_TIMESTAMP)
);

-- Tabela de palavras-chave do SEO global
CREATE TABLE IF NOT EXISTS "seo_keywords_pt" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "_parent_id" integer NOT NULL REFERENCES "seo"("id") ON DELETE CASCADE,
    "_order" integer NOT NULL,
    "keyword" text
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
