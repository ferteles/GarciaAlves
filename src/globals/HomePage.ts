import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Página Inicial (Home)',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroTitle1', label: 'Título Principal (Linha 1)', type: 'text' },
            { name: 'heroTitle2', label: 'Título Destaque (Linha 2)', type: 'text' },
            { name: 'heroSubtitle', label: 'Subtítulo', type: 'textarea' },
            { name: 'heroBgImage', label: 'Imagem de Fundo', type: 'upload', relationTo: 'media' },
          ]
        },
        {
          label: 'Sobre Nós',
          fields: [
            { name: 'aboutTag', label: 'Tag (ex: Quem Somos)', type: 'text' },
            { name: 'aboutTitle1', label: 'Título Linha 1', type: 'text' },
            { name: 'aboutTitle2', label: 'Título Destaque (Cor Primária)', type: 'text' },
            { name: 'aboutTitle3', label: 'Resto do Título', type: 'text' },
            { name: 'aboutText1', label: 'Parágrafo 1', type: 'textarea' },
            { name: 'aboutText2', label: 'Parágrafo 2', type: 'textarea' },
            { name: 'aboutImage', label: 'Imagem Lateral', type: 'upload', relationTo: 'media' },
          ]
        },
        {
          label: 'Áreas de Atuação',
          fields: [
            { name: 'areasTag', label: 'Tag (ex: Nossas Áreas)', type: 'text' },
            { name: 'areasTitle', label: 'Título Principal', type: 'text' },
            { name: 'areasSubtitle', label: 'Subtítulo', type: 'textarea' },
            {
              name: 'areasBoxes',
              label: 'Caixas de Áreas',
              type: 'array',
              minRows: 0,
              maxRows: 4,
              fields: [
                { name: 'title', label: 'Título da Área', type: 'text' },
                { name: 'description', label: 'Descrição', type: 'textarea' },
                { name: 'buttonText', label: 'Texto do Botão', type: 'text' },
              ]
            }
          ]
        },
        {
          label: 'Banner',
          fields: [
            { name: 'bannerImage', label: 'Imagem do Banner Fixo', type: 'upload', relationTo: 'media' },
          ]
        },
        {
          label: 'Números',
          fields: [
            { name: 'numbersTitle', label: 'Título Principal', type: 'text' },
            {
              name: 'stats',
              label: 'Estatísticas',
              type: 'array',
              minRows: 0,
              maxRows: 4,
              fields: [
                { name: 'number', label: 'Número/Dado', type: 'text' },
                { name: 'description', label: 'Descrição', type: 'textarea' },
              ]
            },
            { name: 'numbersFooterTitle', label: 'Título de Rodapé da Seção', type: 'text' },
            { name: 'numbersFooterDesc', label: 'Texto de Rodapé da Seção', type: 'textarea' },
          ]
        },
        {
          label: 'Advogados',
          fields: [
            { name: 'lawyersTitle', label: 'Título da Seção', type: 'text', defaultValue: 'O Escritório' },
            {
              name: 'lawyersList',
              label: 'Lista de Advogados',
              type: 'array',
              fields: [
                { name: 'name', label: 'Nome', type: 'text' },
                { name: 'role', label: 'Cargo', type: 'text' },
                { name: 'bio', label: 'Biografia / Resumo', type: 'textarea' },
                { name: 'email', label: 'E-mail', type: 'text' },
                { name: 'linkedin', label: 'URL do LinkedIn', type: 'text' },
                { name: 'image', label: 'Foto do Advogado', type: 'upload', relationTo: 'media' },
              ]
            }
          ]
        }
      ]
    }
  ],
}
