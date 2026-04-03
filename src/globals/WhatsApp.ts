import { GlobalConfig } from 'payload'

export const WhatsApp: GlobalConfig = {
  slug: 'whatsapp',
  label: 'WhatsApp Flutuante',
  access: {
    read: () => true,
    update: () => true, // Permite atualização (pode ser restrito a admin se preferir)
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
      required: true,
      hooks: {
        beforeChange: [
          ({ value }) => {
            if (typeof value === 'string') {
              return value.replace(/\D/g, ''); // Garante que só números sejam salvos no banco
            }
            return value;
          },
        ],
      },
      validate: (val: string | string[] | null | undefined) => {
        if (!val || typeof val !== 'string') return 'O número é obrigatório';
        const digitsOnly = val.replace(/\D/g, '');
        if (digitsOnly.length < 10) return 'O número deve ter pelo menos 10 dígitos (Ex: 55 + DDD + Número)';
        if (digitsOnly.length > 15) return 'O número está muito longo';
        return true;
      },
      admin: {
        placeholder: '55 61 99999-9999',
        description: 'Ex: 55 61 99999-9999 (O sistema removerá espaços e traços automaticamente)',
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
