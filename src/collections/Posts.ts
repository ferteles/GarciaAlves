import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'date'],
  },
  access: {
    read: () => true, // Público para o frontend ler
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Conteúdo do Artigo',
      type: 'richText',
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Resumo / Trecho (Excerpt)',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (URL)',
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
      label: 'Categorias',
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
