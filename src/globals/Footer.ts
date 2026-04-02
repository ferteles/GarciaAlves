import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Rodapé (Footer)',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Conteúdo Principal',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                {
                  name: 'title_pt',
                  label: 'Título do Rodapé',
                  type: 'text',
                  defaultValue: 'REG.TECH.LAW.ALL',
                },
                {
                  name: 'description_pt',
                  label: 'Descrição',
                  type: 'textarea',
                  defaultValue: 'Vivemos o presente olhando para o que vem a seguir. Conectamos Direito e tecnologia para que negócios possam inovar com segurança, crescer com estratégia e conquistar espaço em um mundo em constante mudança.',
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                {
                  name: 'title_en',
                  label: 'Footer Title',
                  type: 'text',
                  defaultValue: 'REG.TECH.LAW.ALL',
                },
                {
                  name: 'description_en',
                  label: 'Description',
                  type: 'textarea',
                  defaultValue: 'We live the present looking at what comes next. We connect Law and technology so that businesses can innovate safely, grow strategically, and conquer space in a constantly changing world.',
                },
              ],
            },
          ],
        },
        {
          label: 'Informações de Contato',
          fields: [
            {
              name: 'email',
              label: 'E-mail de Contato',
              type: 'text',
              defaultValue: 'contato@garciaalves.com',
              validate: (val: string | string[] | null | undefined) => {
                if (!val || typeof val !== 'string') return 'O e-mail é obrigatório';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(val)) return 'Insira um e-mail válido';
                return true;
              },
            },
            {
              name: 'phone',
              label: 'Telefone/WhatsApp',
              type: 'text',
              defaultValue: '61 9 9999 9999',
            },
            {
              type: 'collapsible',
              label: 'Endereço (PT)',
              fields: [
                {
                  name: 'address_pt',
                  label: 'Linhas de Endereço (PT)',
                  type: 'array',
                  fields: [
                    {
                      name: 'line',
                      type: 'text',
                    }
                  ],
                  defaultValue: [
                    { line: 'shn qu. 1 conj. a bloco a sala 1113' },
                    { line: 'edifício leaptower — asa norte' },
                    { line: 'brasília-df, 70701-010' },
                  ]
                }
              ]
            },
            {
              type: 'collapsible',
              label: 'Address (EN)',
              fields: [
                {
                  name: 'address_en',
                  label: 'Address Lines (EN)',
                  type: 'array',
                  fields: [
                    {
                      name: 'line',
                      type: 'text',
                    }
                  ],
                  defaultValue: [
                    { line: 'shn qu. 1 conj. a bloco a suite 1113' },
                    { line: 'leaptower building — asa norte' },
                    { line: 'brasília-df, 70701-010' },
                  ]
                }
              ]
            }
          ],
        },
        {
          label: 'Redes Sociais',
          fields: [
            {
              name: 'socialLinks',
              label: 'Links de Redes Sociais',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  label: 'Plataforma (ex: LinkedIn)',
                  type: 'text',
                },
                {
                  name: 'url',
                  label: 'URL do Perfil',
                  type: 'text',
                }
              ],
              defaultValue: [
                {
                  platform: 'linkedin',
                  url: 'https://www.linkedin.com/company/garcia-alves-advocacia/',
                }
              ]
            }
          ]
        }
      ],
    },
  ],
}
