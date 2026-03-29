import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: { pt: 'Página Inicial (Home)', en: 'Home Page' },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: { pt: 'Cabeçalho (Hero)', en: 'Hero Section' },
          fields: [
            { name: 'heroTitle1', label: { pt: 'Título Principal (Linha 1)', en: 'Main Title (Line 1)' }, type: 'text', localized: true, defaultValue: 'Pensar. Conectar.' },
            { name: 'heroTitle2', label: { pt: 'Título Destaque (Linha 2)', en: 'Highlighted Title (Line 2)' }, type: 'text', localized: true, defaultValue: 'Resolver.' },
            { name: 'heroSubtitle', label: { pt: 'Subtítulo', en: 'Subtitle' }, type: 'textarea', localized: true, defaultValue: 'Combinamos visão estratégica e atuação técnica em Direito Empresarial, Regulatório e Tecnologia. Oferecemos suporte completo para empresas, empreendedores e instituições que buscam segurança e crescimento sustentável.' },
            { name: 'heroBgImage', label: { pt: 'Imagem de Fundo (Hero)', en: 'Hero Background Image' }, type: 'upload', relationTo: 'media', localized: true },
          ]
        },
        {
          label: { pt: 'Sobre Nós', en: 'About Us' },
          fields: [
            { name: 'aboutTag', label: { pt: 'Etiqueta Superior', en: 'Upper Tag' }, type: 'text', localized: true, defaultValue: 'sobre nós' },
            { name: 'aboutTitle1', label: { pt: 'Título (Parte 1)', en: 'Title (Part 1)' }, type: 'text', localized: true, defaultValue: 'Acreditamos que o' },
            { name: 'aboutTitle2', label: { pt: 'Título Destacado (Cor)', en: 'Highlighted Title (Color)' }, type: 'text', localized: true, defaultValue: 'Direito' },
            { name: 'aboutTitle3', label: { pt: 'Resto do Título (Parte 3)', en: 'Rest of Title (Part 3)' }, type: 'text', localized: true, defaultValue: ' é uma ferramenta de transformação' },
            { name: 'aboutText1', label: { pt: 'Parágrafo 1', en: 'Paragraph 1' }, type: 'textarea', localized: true, defaultValue: 'Atuamos de forma integrada em consultoria jurídica e advocacia contenciosa, unindo conhecimento acadêmico sólido e experiência de mercado para apoiar empresas, empreendedores e pessoas físicas em diferentes áreas.' },
            { name: 'aboutText2', label: { pt: 'Parágrafo 2', en: 'Paragraph 2' }, type: 'textarea', localized: true, defaultValue: 'Nosso foco está em Direito Regulatório e Tecnologia, mas também atuamos em advocacia empresarial, consultoria contratual, Direito Cível e demandas institucionais. Trabalhamos de forma preventiva e resolutiva, garantindo segurança jurídica e estratégias eficazes em cada etapa do processo.' },
            { name: 'aboutImage', label: { pt: 'Imagem Lateral', en: 'Side Image' }, type: 'upload', relationTo: 'media', localized: true },
          ]
        },
        {
          label: { pt: 'Áreas de Atuação', en: 'Practice Areas' },
          fields: [
            { name: 'areasTag', label: { pt: 'Etiqueta/Tag', en: 'Tag' }, type: 'text', localized: true, defaultValue: 'como trabalhamos' },
            { name: 'areasTitle', label: { pt: 'Título Principal', en: 'Main Title' }, type: 'text', localized: true, defaultValue: 'Conheça nossas áreas\nde atuação' },
            { name: 'areasSubtitle', label: { pt: 'Subtítulo Longo', en: 'Long Subtitle' }, type: 'textarea', localized: true, defaultValue: 'Atendemos empresas de tecnologia, empreendedores e clientes em geral, sempre com soluções jurídicas sob medida. Nosso trabalho vai além de resolver conflitos: buscamos antecipar riscos, gerar oportunidades e fortalecer a tomada de decisões.' },
            {
              name: 'areasBoxes',
              label: { pt: 'Caixas de Áreas', en: 'Area Boxes' },
              type: 'array',
              localized: true,
              minRows: 0,
              maxRows: 4,
              defaultValue: [
                { title: 'Regulatório e Tecnologia', description: 'Apoiamos negócios inovadores em suas relações com o governo e órgãos reguladores, oferecendo assessoria jurídica para adequação às normas, participação em consultas públicas, elaboração de pareceres técnicos e estratégias que assegurem conformidade sem comprometer a inovação.', buttonText: 'entre em contato' },
                { title: 'Judicial', description: 'Atuamos em processos cíveis, empresariais e regulatórios, com foco em defesa estratégica em conflitos complexos. Nossa advocacia empresarial busca soluções ágeis, justas e alinhadas aos interesses de longo prazo dos clientes.', buttonText: 'entre em contato' },
                { title: 'Consultivo', description: 'Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.', buttonText: 'entre em contato' },
                { title: 'Legislativo e Institucional', description: 'Acompanhamos propostas de lei e políticas públicas que impactam setores estratégicos, promovendo diálogo direto com entes públicos para a construção de marcos jurídicos modernos. Essa atuação fortalece a posição dos clientes e garante sustentabilidade jurídica no longo prazo.', buttonText: 'entre em contato' }
              ],
              fields: [
                { name: 'title', label: { pt: 'Título da Área', en: 'Area Title' }, type: 'text' },
                { name: 'description', label: { pt: 'Descrição Curta', en: 'Short Description' }, type: 'textarea' },
                { name: 'buttonText', label: { pt: 'Texto do Botão', en: 'Button Text' }, type: 'text' },
              ]
            }
          ]
        },
        {
          label: { pt: 'Banner Fixo', en: 'Fixed Banner' },
          fields: [
            { name: 'bannerImage', label: { pt: 'Imagem do Banner Fixo', en: 'Banner Image' }, type: 'upload', relationTo: 'media', localized: true },
          ]
        },
        {
          label: { pt: 'Números e Estatísticas', en: 'Numbers & Stats' },
          fields: [
            { name: 'numbersTitle', label: { pt: 'Título Principal', en: 'Main Title' }, type: 'text', localized: true, defaultValue: 'O escritório em\nnúmeros' },
            {
              name: 'stats',
              label: { pt: 'Lista de Estatísticas', en: 'Statistics List' },
              type: 'array',
              localized: true,
              minRows: 0,
              maxRows: 4,
              defaultValue: [
                 { number: '15 anos de experiência', description: 'Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.' },
                 { number: 'Atuação internacional', description: 'Experiência em projetos no Mercosul, América Latina, África, Europa, Estados Unidos e em organismos multilaterais como a ONU, trazendo visão global às soluções jurídicas no Brasil.' },
                 { number: 'Formação de excelência', description: 'LL.M. em Law & Technology pela UC Berkeley, mestrado em Cybersecurity & Regulation pela Universidade de Brasília e especialização no George C. Marshall European Center for Security Studies.' },
                 { number: 'Liderança em políticas digitais', description: 'Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.' }
              ],
              fields: [
                { name: 'number', label: { pt: 'Número/Dado (ex: 15)', en: 'Number/Stat (ex: 15)' }, type: 'text' },
                { name: 'description', label: { pt: 'Descrição', en: 'Description' }, type: 'textarea' },
              ]
            },
            { name: 'numbersFooterTitle', label: { pt: 'Título Inferior da Seção', en: 'Bottom Title' }, type: 'text', localized: true, defaultValue: 'Transformação da complexidade em vantagem' },
            { name: 'numbersFooterDesc', label: { pt: 'Parágrafo Inferior da Seção', en: 'Bottom Paragraph' }, type: 'textarea', localized: true, defaultValue: 'Compromisso em transformar complexidade regulatória, conflitos jurídicos e demandas empresariais em soluções seguras e competitivas para nossos clientes.' },
          ]
        },
        {
          label: { pt: 'Advogados', en: 'Lawyers' },
          fields: [
            { name: 'lawyersTitle', label: { pt: 'Título da Seção', en: 'Section Title' }, type: 'text', localized: true, defaultValue: 'Nossos Advogados' },
            {
              name: 'lawyersList',
              label: { pt: 'Lista de Advogados Ativos', en: 'Active Lawyers List' },
              type: 'array',
              localized: true,
              defaultValue: [
                { name: "Sérgio Garcia Alves", role: "Sócio Fundador", bio: "LL.M. em Law & Technology pela UC Berkeley...", email: "sergio.alves@garciaalves.com", linkedin: "#" },
                { name: "Sérgio Garcia Alves", role: "Sócio Fundador", bio: "LL.M. em Law & Technology pela UC Berkeley...", email: "sergio.alves@garciaalves.com", linkedin: "#" },
              ],
              fields: [
                { name: 'name', label: { pt: 'Nome Completo', en: 'Full Name' }, type: 'text' },
                { name: 'role', label: { pt: 'Cargo (ex: Sócio)', en: 'Role (e.g., Partner)' }, type: 'text' },
                { name: 'bio', label: { pt: 'Biografia Curta', en: 'Short Bio' }, type: 'textarea' },
                { name: 'email', label: { pt: 'E-mail Profissional', en: 'Work E-mail' }, type: 'text' },
                { name: 'linkedin', label: { pt: 'URL do LinkedIn', en: 'LinkedIn URL' }, type: 'text' },
                { name: 'image', label: { pt: 'Foto de Perfil', en: 'Profile Photo' }, type: 'upload', relationTo: 'media', localized: true },
              ]
            }
          ]
        }
      ]
    }
  ],
}
