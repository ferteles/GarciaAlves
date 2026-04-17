import { test, expect } from '@playwright/test';

// Este teste ira rodar automaticamente logado, pois configuramos a dependency do "setup" no config.ts
test.describe('Testes do Menu Principal (Globais)', () => {

  test('admin consegue inserir um novo item de menu bilingue', async ({ page }) => {
    // 1. Navega direto para a area de globais > Menu Principal
    await page.goto('/admin/globals/main-menu');

    // 2. Garante que titulo renderizou
    await expect(page.locator('h1', { hasText: 'Menu Principal' })).toBeVisible();

    // 3. Clica em "Adicionar Item" (o label padrao do Payload array costuma ser Add + singular label)
    // Usaremos texto parcial para ficar robusto
    const addButton = page.getByRole('button', { name: /adicionar.*item/i });
    if(await addButton.isVisible()) {
      await addButton.click();
    } else {
      // Tenta alternativa caso a UI tenha mudado
      await page.getByText('Adicionar Item', { exact: false }).click();
    }

    // 4. Localiza o ULTIMO bloco do array adicionado para preencher os dados
    const lastRow = page.locator('.array-field__row').last();
    
    // Preenche campo portugues
    await lastRow.getByLabel('Rótulo (PT)').fill('TESTE: Novo Item PT');
    // Preenche campo ingles
    await lastRow.getByLabel('Label (EN)').fill('TEST: New Item EN');
    // Preenche link
    await lastRow.getByLabel('Link (E-mail ou URL)').fill('/novo-link-de-teste');

    // 5. Clica no botao principal de Salvar
    await page.locator('button[type="submit"]#action-save').click();

    // 6. Aguarda o toast/notificacao de sucesso do sistema
    const toast = page.locator('.Toastify__toast--success');
    await expect(toast).toBeVisible();
    await expect(toast).toContainText('Salvo com sucesso');
  });

});
