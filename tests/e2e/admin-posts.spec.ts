import { test, expect } from '@playwright/test';

test.describe('Testes de Publicações/Posts (Coleções)', () => {

  test('admin consegue criar um post bilingue e salvar', async ({ page }) => {
    // 1. Acessa a listagem da coleção de Posts 
    // Usamos o plural slug das collections configuradas no Payload (slug original padrao e posts)
    await page.goto('/admin/collections/posts');

    // 2. Clica no botao de criar novo
    await page.getByRole('link', { name: /criar.*novo/i }).click();

    // 3. Preenche os campos requeridos (Abaixo estao as estimativas de como seu model e)
    // Nota: Voce deve ajustar esses seletores de acordo com os campos reais presentes no Post!
    
    // Supondo que tem um Titulo:
    const titlePT = page.getByLabel('Título', { exact: true });
    if (await titlePT.isVisible()) await titlePT.fill('Artigo de Teste E2E');
    
    // Se tiver abas (tabs) ou se o payload usa ?locale=en:
    // O payload CMS 3.x normalmente mostra os idiomas no canto superior direito para alternar
    
    // Preenchendo um conteudo RichText (exige um pequeno workaround, interagir com ContentEditable)
    // Exemplo para preencher o Lexical PT
    const lexicalEditor = page.locator('[contenteditable="true"]').first();
    if(await lexicalEditor.isVisible()) {
      await lexicalEditor.click();
      await page.keyboard.type('Conteudo inicial gerado de forma automatizada pelo Playwright.');
    }

    // 4. Salvar Postagem
    await page.locator('button[type="submit"]#action-save').click();

    // 5. Confirma criacao
    const toast = page.locator('.Toastify__toast--success');
    await expect(toast).toBeVisible();
    await expect(toast).toContainText('Salvo com sucesso');

    // 6. Extrai o ID da URL se precisarmos deletar depois
    const currentUrl = page.url();
    console.log('Post criado com a URL/ID:', currentUrl);
  });

});
