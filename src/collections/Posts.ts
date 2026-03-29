import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: { pt: 'Artigo', en: 'Post' },
    plural: { pt: 'Artigos do Blog', en: 'Blog Posts' },
  },
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
      label: { pt: 'Título do Artigo', en: 'Post Title' },
      type: 'text',
      required: true,
      localized: true, // IMPORTANT! Enables DB translation
    },
    {
      name: 'content',
      label: { pt: 'Conteúdo Principal', en: 'Main Content' },
      type: 'richText',
      required: true,
      localized: true, // IMPORTANT! Enables DB translation
    },
    {
      name: 'excerpt',
      label: { pt: 'Resumo / Trecho (Excerpt)', en: 'Summary Excerpt' },
      type: 'textarea',
      required: true,
      localized: true, // IMPORTANT! Enables DB translation
    },
    {
      name: 'slug',
      label: { pt: 'Ligação (URL Slug)', en: 'URL Slug' },
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      localized: true, // Permite URLs como /blog/my-post ou /blog/meu-artigo
    },
    {
      name: 'image',
      label: { pt: 'Imagem de Capa', en: 'Cover Image' },
      type: 'upload',
      relationTo: 'media',
      required: true,
      localized: true, // Permite imagem diferente caso tenha texto
    },
    {
      name: 'date',
      label: { pt: 'Data Curta de Publicação', en: 'Publish Date' },
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      label: { pt: 'Categorias (Tags)', en: 'Categories (Tags)' },
      type: 'select',
      hasMany: true,
      options: [
        { label: { pt: 'Inovação', en: 'Innovation' }, value: 'Inovação' },
        { label: { pt: 'Regulação', en: 'Regulation' }, value: 'Regulação' },
        { label: { pt: 'Políticas Públicas', en: 'Public Policy' }, value: 'Políticas Públicas' },
        { label: { pt: 'Tecnologia', en: 'Technology' }, value: 'Tecnologia' },
        { label: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' }, value: 'Inteligência Artificial' },
        { label: { pt: 'Startups', en: 'Startups' }, value: 'Startups' },
        { label: { pt: 'Societário', en: 'Corporate' }, value: 'Societário' },
        { label: { pt: 'Dados', en: 'Data' }, value: 'Dados' },
        { label: { pt: 'Privacidade', en: 'Privacy' }, value: 'Privacidade' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
