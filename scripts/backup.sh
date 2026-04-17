#!/bin/bash
# Script de Backup Automatizado para SQLite - Garcia Alves Advocacia

# Configurações
DB_PATH="/home/garciaalves/database/payload.db"
BACKUP_DIR="/home/garciaalves/database/backups"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/payload_$DATE.db"
LOG_FILE="$BACKUP_DIR/backup_log.txt"

# Criar diretório de backup se não existir
mkdir -p "$BACKUP_DIR"

echo "[$DATE] Iniciando backup do banco de dados..." >> "$LOG_FILE"

# Executar backup "quente" usando sqlite3 (mais seguro para arquivos em uso)
sqlite3 "$DB_PATH" ".backup '$BACKUP_FILE'"

if [ $? -eq 0 ]; then
    echo "[$DATE] Backup concluído com sucesso: $BACKUP_FILE" >> "$LOG_FILE"
    # Compactar para economizar ainda mais espaço (opcional, mas recomendado)
    gzip "$BACKUP_FILE"
else
    echo "[$DATE] ERRO: Falha ao realizar backup do banco de dados." >> "$LOG_FILE"
    exit 1
fi

# Rotação: Remover backups com mais de 7 dias
find "$BACKUP_DIR" -name "payload_*.db.gz" -mtime +7 -delete
echo "[$DATE] Rotação concluída (arquivos com mais de 7 dias removidos)." >> "$LOG_FILE"

exit 0
