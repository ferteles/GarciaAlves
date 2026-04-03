import { getPayload } from 'payload'
import config from './src/payload.config'

async function sync() {
  console.log('🔄 Iniciando sincronização do banco de dados...');
  try {
    const payload = await getPayload({ config })
    console.log('✅ Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.error('❌ Erro na sincronização:', error);
  }
  process.exit(0);
}

sync();
