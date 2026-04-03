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
              type: 'collapsible',
              label: 'Endereço (PT)',
              fields: [
                {
                  name: 'address_line1_pt',
                  label: 'Endereço - Linha 1 (PT)',
                  type: 'text',
                  defaultValue: 'SHN QU. 1 CONJ. A BLOCO A SALA 1113',
                },
                {
                  name: 'address_line2_pt',
                  label: 'Endereço - Linha 2 (PT)',
                  type: 'text',
                  defaultValue: 'EDIFÍCIO LEAPTOWER — ASA NORTE',
                },
                {
                  name: 'address_line3_pt',
                  label: 'Endereço - Linha 3 (PT)',
                  type: 'text',
                  defaultValue: 'BRASÍLIA-DF, 70701-010',
                },
              ]
            },
            {
              type: 'collapsible',
              label: 'Address (EN)',
              fields: [
                {
                  name: 'address_line1_en',
                  label: 'Address - Line 1 (EN)',
                  type: 'text',
                  defaultValue: 'SHN QU. 1 CONJ. A BLOCO A SUITE 1113',
                },
                {
                  name: 'address_line2_en',
                  label: 'Address - Line 2 (EN)',
                  type: 'text',
                  defaultValue: 'LEAPTOWER BUILDING — ASA NORTE',
                },
                {
                  name: 'address_line3_en',
                  label: 'Address - Line 3 (EN)',
                  type: 'text',
                  defaultValue: 'BRASÍLIA-DF, 70701-010',
                },
              ]
            },
            {
              name: 'email',
              label: 'E-mail de Contato',
              type: 'text',
              defaultValue: 'contato@garciaalves.com',
            },
            {
              name: 'phone',
              label: 'Telefone/WhatsApp',
              type: 'text',
              defaultValue: '61 9 9999 9999',
            },
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
          ],
        },
      ],
    },
  ],
}
