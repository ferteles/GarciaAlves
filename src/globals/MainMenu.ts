import { GlobalConfig } from 'payload'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  label: 'Menu Principal',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      label: 'Itens do Menu',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label_pt',
              label: 'Rótulo (PT)',
              type: 'text',
              required: true,
              admin: {
                width: '33%',
              },
            },
            {
              name: 'label_en',
              label: 'Label (EN)',
              type: 'text',
              required: true,
              admin: {
                width: '33%',
              },
            },
            {
              name: 'link',
              label: 'Link (E-mail ou URL)',
              type: 'text',
              required: true,
              admin: {
                width: '33%',
                description: 'Ex: #quem-somos, #areas ou /midia',
              },
            },
          ],
        },
      ],
      defaultValue: [
        { label_pt: 'quem somos', label_en: 'about us', link: '#quem-somos' },
        { label_pt: 'áreas de atuação', label_en: 'expertise', link: '#areas' },
        { label_pt: 'advogados', label_en: 'lawyers', link: '#advogados' },
        { label_pt: 'mídia', label_en: 'media', link: '/midia' },
        { label_pt: 'contato', label_en: 'contact', link: '#contato' },
      ],
    },
  ],
}
