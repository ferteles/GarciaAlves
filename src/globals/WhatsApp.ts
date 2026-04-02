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
      required: true,
      validate: (val: string | string[] | null | undefined) => {
        if (!val || typeof val !== 'string') return 'O número é obrigatório';
        const digitsOnly = val.replace(/\D/g, '');
        if (digitsOnly.length < 10) return 'O número deve ter pelo menos 10 dígitos (Ex: 55 + DDD + Número)';
        if (digitsOnly.length > 15) return 'O número está muito longo';
        if (val !== digitsOnly) return 'Use apenas números, sem espaços, traços ou parênteses';
        return true;
      },
      admin: {
        placeholder: '5561999999999',
        description: 'Apenas números, incluindo o código do país (55 para Brasil). Ex: 5561999999999',
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
