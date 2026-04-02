import { GlobalConfig } from 'payload'

export const WhatsApp: GlobalConfig = {
  slug: 'whatsapp',
  label: 'WhatsApp Flutuante',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'active',
      label: 'Ativar Botão Flutuante',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'phoneNumber',
      label: 'Número do WhatsApp (com DDD)',
      type: 'text',
      defaultValue: '5561999999999',
      admin: {
        placeholder: '5561999999999',
        description: 'Apenas números, incluindo o código do país (55 para Brasil).',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: '🇧🇷 Português',
          fields: [
            {
              name: 'message_pt',
              label: 'Mensagem Inicial (PT)',
              type: 'text',
              defaultValue: 'Olá! Gostaria de saber mais sobre os serviços da Garcia Alves Advocacia.',
            },
            {
              name: 'label_pt',
              label: 'Etiqueta do Botão (PT)',
              type: 'text',
              defaultValue: 'Fale Conosco',
            },
          ],
        },
        {
          label: '🇺🇸 English',
          fields: [
            {
              name: 'message_en',
              label: 'Initial Message (EN)',
              type: 'text',
              defaultValue: 'Hello! I would like to know more about Garcia Alves Advocacia services.',
            },
            {
              name: 'label_en',
              label: 'Button Label (EN)',
              type: 'text',
              defaultValue: 'Contact Us',
            },
          ],
        },
      ],
    },
  ],
}
