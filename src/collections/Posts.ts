import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Artigo',
    plural: 'Artigos do Blog',
  },
  admin: {
    useAsTitle: 'title_pt',
    defaultColumns: ['title_pt', 'slug', 'date'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: '🇧🇷 Conteúdo em Português',
          fields: [
            {
              name: 'title_pt',
              label: 'Título do Artigo',
              type: 'text',
              required: true,
            },
            {
              name: 'excerpt_pt',
              label: 'Resumo / Trecho (Excerpt)',
              type: 'textarea',
              required: true,
            },
            {
              name: 'content_pt',
              label: 'Conteúdo Principal',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          label: '🇺🇸 Content in English',
          fields: [
            {
              name: 'title_en',
              label: 'Post Title',
              type: 'text',
            },
            {
              name: 'excerpt_en',
              label: 'Summary Excerpt',
              type: 'textarea',
            },
            {
              name: 'content_en',
              label: 'Main Content',
              type: 'richText',
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      label: 'Ligação (URL Slug)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      label: 'Imagem de Capa',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'date',
      label: 'Data de Publicação',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      label: 'Categorias (Tags)',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Inovação', value: 'Inovação' },
        { label: 'Regulação', value: 'Regulação' },
        { label: 'Políticas Públicas', value: 'Políticas Públicas' },
        { label: 'Tecnologia', value: 'Tecnologia' },
        { label: 'Inteligência Artificial', value: 'Inteligência Artificial' },
        { label: 'Startups', value: 'Startups' },
        { label: 'Societário', value: 'Societário' },
        { label: 'Dados', value: 'Dados' },
        { label: 'Privacidade', value: 'Privacidade' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
