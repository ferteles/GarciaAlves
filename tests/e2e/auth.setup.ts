import { test as setup, expect } from '@playwright/test';
import path from 'path';

// O Playwright vai rodar isso apenas uma vez e salvar o estado de login no disco
const authFile = path.join(__dirname, '../../playwright/.auth/admin.json');

setup('authenticate as admin', async ({ page }) => {
  console.log('Realizando login como admin...');
  // Acessa a pagina de login
  await page.goto('/admin');
  
  // Como e ambiente de teste, usaremos um email generico do admin local.
  // IMPORTANTE: voce devera criar este usuario no seu banco de dados se ele nao existir,
  // ou substituir pelos seus dados reais.
  await page.getByLabel('E-mail').fill('admin-teste@tauatech.com');
  await page.getByLabel('Senha').fill('123456');
  
  // Clica no botao de login
  await page.locator('button[type="submit"]').click();
  
  // Aguarda a navegacao e espera o dashboard principal ficar visivel 
  // para ter certeza de que o login deu certo
  await expect(page.locator('h1', { hasText: 'Dashboard' })).toBeVisible({ timeout: 10000 });
  
  // Salva o estado da pagina (cookies, local storage)
  await page.context().storageState({ path: authFile });
  console.log('Sessão salva com sucesso em', authFile);
});
