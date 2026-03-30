interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Garcia Alves Advocacia',
        url: 'https://garciaalves.adv.br',
        logo: 'https://garciaalves.adv.br/assets/og-default.png',
        description:
          'Advocacia especializada em Direito Empresarial, Regulatório e Tecnologia. Pensar. Conectar. Resolver.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Setor Comercial Norte Quadra 04, BL B',
          addressLocality: 'Brasília',
          addressRegion: 'DF',
          postalCode: '70714-900',
          addressCountry: 'BR',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'contato@garciaalves.adv.br',
          availableLanguage: ['Portuguese', 'English'],
        },
        sameAs: [
          'https://www.linkedin.com/company/garcia-alves-advocacia',
        ],
      }}
    />
  )
}

export function LegalServiceJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Garcia Alves Advocacia',
        url: 'https://garciaalves.adv.br',
        description:
          'Escritório de advocacia especializado em Direito Empresarial, Direito Regulatório, Tecnologia e Inovação em Brasília-DF.',
        areaServed: {
          '@type': 'Country',
          name: 'Brazil',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Setor Comercial Norte Quadra 04, BL B',
          addressLocality: 'Brasília',
          addressRegion: 'DF',
          postalCode: '70714-900',
          addressCountry: 'BR',
        },
        priceRange: '$$',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Áreas de Atuação',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito Regulatório e Tecnologia' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Advocacia Empresarial e Judicial' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoria Jurídica' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assessoria Legislativa e Institucional' } },
          ],
        },
      }}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  publishedAt: string
  imageUrl?: string
  authorName?: string
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  imageUrl,
  authorName = 'Garcia Alves Advocacia',
}: ArticleJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url,
        datePublished: publishedAt,
        author: {
          '@type': 'Organization',
          name: authorName,
          url: 'https://garciaalves.adv.br',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Garcia Alves Advocacia',
          url: 'https://garciaalves.adv.br',
          logo: {
            '@type': 'ImageObject',
            url: 'https://garciaalves.adv.br/assets/og-default.png',
          },
        },
        ...(imageUrl && {
          image: {
            '@type': 'ImageObject',
            url: imageUrl,
          },
        }),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }}
    />
  )
}
