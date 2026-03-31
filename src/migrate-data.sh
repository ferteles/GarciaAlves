#!/bin/bash
# Script de migração: Versão corrigida para Payload CMS v3
# Ajusta colunas de imagem, nomes de tabelas array e migra dados.

DB="/home/garciaalves/database/payload.db"

echo ""
echo "🔧 Iniciando migração do banco de dados: $DB"
echo ""

# 1. Adicionar colunas de imagem na home_page (Payload espera snake_case_id)
echo "📋 Adicionando colunas de imagem na home_page..."
for col in hero_bg_image_id about_image_id banner_image_id; do
  sqlite3 "$DB" "ALTER TABLE home_page ADD COLUMN \"$col\" integer;" 2>/dev/null && echo "  ✅ $col" || echo "  ⏭️  $col já existe"
done

# 2. Corrigir nomes de tabelas de array (case-sensitive) para o que o Payload espera
# Payload no log: home_page_areasBoxes_pt, home_page_lawyersList_pt
echo ""
echo "📋 Criando/Renomeando tabelas de array (case-sensitive)..."

sqlite3 "$DB" '
-- Areas Boxes
CREATE TABLE IF NOT EXISTS "home_page_areasBoxes_pt" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" text PRIMARY KEY NOT NULL,
  "title" text,
  "description" text,
  "button_text" text,
  FOREIGN KEY ("_parent_id") REFERENCES "home_page"("id") ON DELETE cascade
);
CREATE TABLE IF NOT EXISTS "home_page_areasBoxes_en" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" text PRIMARY KEY NOT NULL,
  "title" text,
  "description" text,
  "button_text" text,
  FOREIGN KEY ("_parent_id") REFERENCES "home_page"("id") ON DELETE cascade
);

-- Lawyers List
CREATE TABLE IF NOT EXISTS "home_page_lawyersList_pt" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" text PRIMARY KEY NOT NULL,
  "name" text,
  "role" text,
  "bio" text,
  "email" text,
  "linkedin" text,
  "image_id" integer,
  FOREIGN KEY ("_parent_id") REFERENCES "home_page"("id") ON DELETE cascade,
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null
);
CREATE TABLE IF NOT EXISTS "home_page_lawyersList_en" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" text PRIMARY KEY NOT NULL,
  "name" text,
  "role" text,
  "bio" text,
  "email" text,
  "linkedin" text,
  "image_id" integer,
  FOREIGN KEY ("_parent_id") REFERENCES "home_page"("id") ON DELETE cascade,
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null
);
' && echo "  ✅ Tabelas case-sensitive criadas"

# 3. Copiar dados das antigas tabelas para as novas corrigidas
echo ""
echo "📋 Migrando dados dos arrays para novas tabelas..."
sqlite3 "$DB" "
INSERT OR REPLACE INTO home_page_areasBoxes_pt SELECT _order, _parent_id, id, title, description, button_text FROM home_page_areas_boxes WHERE _locale='pt';
INSERT OR REPLACE INTO home_page_areasBoxes_en SELECT _order, _parent_id, id, title, description, button_text FROM home_page_areas_boxes WHERE _locale='en';
INSERT OR REPLACE INTO home_page_lawyersList_pt SELECT _order, _parent_id, id, name, role, bio, email, linkedin, image_id FROM home_page_lawyers_list WHERE _locale='pt';
INSERT OR REPLACE INTO home_page_lawyersList_en SELECT _order, _parent_id, id, name, role, bio, email, linkedin, image_id FROM home_page_lawyers_list WHERE _locale='en';
" && echo "  ✅ Dados migrados com sucesso!"

# 4. Migrar imagens fixas da home_page_locales para home_page
echo ""
echo "📋 Migrando referências de imagem na home_page..."
sqlite3 "$DB" "
UPDATE home_page SET
  hero_bg_image_id = (SELECT hero_bg_image_id FROM home_page_locales WHERE _locale='pt' AND _parent_id=home_page.id),
  about_image_id = (SELECT about_image_id FROM home_page_locales WHERE _locale='pt' AND _parent_id=home_page.id),
  banner_image_id = (SELECT banner_image_id FROM home_page_locales WHERE _locale='pt' AND _parent_id=home_page.id)
WHERE id = 1;
" && echo "  ✅ Referências de imagem PT migradas"

# 5. Garantir colunas de posts e limpar dados redundantes
echo ""
echo "📋 Ajustando tabela posts..."
for col in title_pt title_en excerpt_pt excerpt_en content_pt content_en; do
  sqlite3 "$DB" "ALTER TABLE posts ADD COLUMN \"$col\" text;" 2>/dev/null && echo "  ✅ Coluna $col adicionada" || echo "  ⏭️  $col já existe"
done

# Copiar dados de posts_locales
sqlite3 "$DB" "
UPDATE posts SET
  title_pt = (SELECT title FROM posts_locales WHERE _locale='pt' AND _parent_id=posts.id),
  excerpt_pt = (SELECT excerpt FROM posts_locales WHERE _locale='pt' AND _parent_id=posts.id),
  content_pt = (SELECT content FROM posts_locales WHERE _locale='pt' AND _parent_id=posts.id),
  title_en = (SELECT title FROM posts_locales WHERE _locale='en' AND _parent_id=posts.id),
  excerpt_en = (SELECT excerpt FROM posts_locales WHERE _locale='en' AND _parent_id=posts.id),
  content_en = (SELECT content FROM posts_locales WHERE _locale='en' AND _parent_id=posts.id);
" && echo "  ✅ Dados de posts migrados"

echo ""
echo "✅ Migração finalizada!"
echo ""
