import { GlobalConfig } from 'payload'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  label: 'Menu Principal',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: '🇧🇷 Português',
          fields: [
            {
              name: 'items_pt',
              label: 'Itens do Menu (Português)',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Rótulo (Label)',
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                  label: 'Link (ex: #areas ou /blog)',
                },
              ],
              defaultValue: [
                { label: 'quem somos', link: '#quem-somos' },
                { label: 'áreas de atuação', link: '#areas' },
                { label: 'advogados', link: '#advogados' },
                { label: 'contato', link: '#contato' },
                { label: 'blog', link: '/blog' },
              ],
            },
          ],
        },
        {
          label: '🇺🇸 English',
          fields: [
            {
              name: 'items_en',
              label: 'Menu Items (English)',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                  label: 'Link (e.g., #areas or /blog)',
                }
              ],
              defaultValue: [
                { label: 'about us', link: '#quem-somos' },
                { label: 'expertise', link: '#areas' },
                { label: 'lawyers', link: '#advogados' },
                { label: 'contact', link: '#contato' },
                { label: 'blog', link: '/blog' },
              ],
            },
          ],
        }
      ]
    }
  ],
}
