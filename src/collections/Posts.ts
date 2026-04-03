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
    // ─── SEO ─────────────────────────────────────────────────
    {
      type: 'tabs',
      tabs: [
        {
          label: 'SEO',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                {
                  name: 'seo_title_pt',
                  label: 'Título SEO (PT)',
                  type: 'text',
                  admin: {
                    description: 'Override do título para buscadores. Deixe em branco para usar o título do artigo.',
                  },
                },
                {
                  name: 'seo_description_pt',
                  label: 'Meta Descrição (PT)',
                  type: 'textarea',
                  admin: {
                    description: 'Máx. 160 caracteres. Deixe em branco para usar o resumo do artigo.',
                  },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                {
                  name: 'seo_title_en',
                  label: 'SEO Title (EN)',
                  type: 'text',
                  admin: {
                    description: 'Override title for search engines. Leave blank to use the article title.',
                  },
                },
                {
                  name: 'seo_description_en',
                  label: 'Meta Description (EN)',
                  type: 'textarea',
                  admin: {
                    description: 'Max. 160 characters. Leave blank to use the article excerpt.',
                  },
                },
              ],
            },
            {
              name: 'seo_ogImage',
              label: 'Imagem OG (override, 1200×630px)',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Deixe em branco para usar a imagem de capa do artigo.',
              },
            },
            {
              name: 'noindex',
              label: 'Não indexar este artigo (noindex)',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}
