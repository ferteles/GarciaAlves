import { GlobalConfig } from 'payload'

export const Seo: GlobalConfig = {
  slug: 'seo',
  label: 'SEO',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ─── CONFIGURAÇÕES GLOBAIS ────────────────────────────
        {
          label: 'Configurações Globais',
          fields: [
            {
              name: 'siteName',
              label: 'Nome do Site',
              type: 'text',
              defaultValue: 'Garcia Alves Advocacia',
            },
            {
              name: 'titleTemplate',
              label: 'Template de Título',
              type: 'text',
              defaultValue: '%s | Garcia Alves Advocacia',
              admin: {
                description: 'Use %s onde o título da página será inserido. Ex: "%s | Garcia Alves Advocacia"',
              },
            },
            {
              name: 'siteUrl',
              label: 'URL do Site',
              type: 'text',
              defaultValue: 'https://garciaalves.adv.br',
            },
            {
              name: 'twitterHandle',
              label: 'Twitter/X Handle',
              type: 'text',
              defaultValue: '@garciaalvesadv',
            },
            {
              name: 'defaultOgImage',
              label: 'Imagem OG Padrão (1200×630px)',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Usada quando a página não tiver imagem própria.',
              },
            },
            {
              name: 'googleVerification',
              label: 'Google Search Console – Código de Verificação',
              type: 'text',
              admin: {
                description: 'Conteúdo da meta tag google-site-verification.',
              },
            },
            {
              name: 'keywords_pt',
              label: 'Palavras-chave Padrão (PT)',
              type: 'array',
              admin: { description: 'Palavras-chave usadas como base em todas as páginas.' },
              fields: [{ name: 'keyword', label: 'Palavra-chave', type: 'text' }],
              defaultValue: [
                { keyword: 'advocacia empresarial' },
                { keyword: 'direito regulatório' },
                { keyword: 'direito digital' },
                { keyword: 'tecnologia e inovação' },
                { keyword: 'escritório de advocacia Brasília' },
                { keyword: 'LGPD' },
                { keyword: 'Garcia Alves Advocacia' },
              ],
            },
          ],
        },

        // ─── PÁGINA INICIAL ───────────────────────────────────
        {
          label: 'Página Inicial',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                {
                  name: 'homeTitle_pt',
                  label: 'Título da Página (PT)',
                  type: 'text',
                  defaultValue: 'Garcia Alves Advocacia | Direito Empresarial, Regulatório e Tecnologia',
                },
                {
                  name: 'homeDescription_pt',
                  label: 'Meta Descrição (PT)',
                  type: 'textarea',
                  defaultValue: 'Escritório de advocacia especializado em Direito Empresarial, Regulatório e Tecnologia em Brasília-DF. Combinamos visão estratégica e atuação técnica para empresas, empreendedores e instituições.',
                  admin: { description: 'Máx. 160 caracteres.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                {
                  name: 'homeTitle_en',
                  label: 'Page Title (EN)',
                  type: 'text',
                  defaultValue: 'Garcia Alves Advocacia | Corporate, Regulatory and Technology Law',
                },
                {
                  name: 'homeDescription_en',
                  label: 'Meta Description (EN)',
                  type: 'textarea',
                  defaultValue: 'Law firm specializing in Corporate, Regulatory and Technology Law in Brasília, Brazil. We combine strategic vision and technical expertise for businesses, entrepreneurs and institutions.',
                  admin: { description: 'Max. 160 characters.' },
                },
              ],
            },
            {
              name: 'homeOgImage',
              label: 'Imagem OG da Home (1200×630px)',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Deixe em branco para usar a imagem OG padrão.' },
            },
          ],
        },

        // ─── BLOG ────────────────────────────────────────────
        {
          label: 'Blog',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                {
                  name: 'blogTitle_pt',
                  label: 'Título da Listagem do Blog (PT)',
                  type: 'text',
                  defaultValue: 'Blog Jurídico | Artigos sobre Direito Regulatório, Digital e Empresarial',
                },
                {
                  name: 'blogDescription_pt',
                  label: 'Meta Descrição (PT)',
                  type: 'textarea',
                  defaultValue: 'Artigos jurídicos e análises sobre Direito Regulatório, Tecnologia, LGPD, Inteligência Artificial e Advocacia Empresarial. Insights produzidos por advogados especializados em Brasília-DF.',
                  admin: { description: 'Máx. 160 caracteres.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                {
                  name: 'blogTitle_en',
                  label: 'Blog Listing Title (EN)',
                  type: 'text',
                  defaultValue: 'Legal Blog | Articles on Regulatory, Digital and Corporate Law',
                },
                {
                  name: 'blogDescription_en',
                  label: 'Meta Description (EN)',
                  type: 'textarea',
                  defaultValue: 'Legal articles and analysis on Regulatory Law, Technology, LGPD, Artificial Intelligence and Corporate Advocacy. Insights from specialized lawyers in Brasília, Brazil.',
                  admin: { description: 'Max. 160 characters.' },
                },
              ],
            },
            {
              name: 'blogOgImage',
              label: 'Imagem OG do Blog (1200×630px)',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Deixe em branco para usar a imagem OG padrão.' },
            },
          ],
        },
      ],
    },
  ],
}
