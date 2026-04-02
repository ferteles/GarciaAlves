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
        // ─── HERO ───────────────────────────────────────────
        {
          label: 'Cabeçalho (Hero)',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                { name: 'heroTitle1_pt', label: 'Título Principal (Linha 1)', type: 'text', defaultValue: 'Pensar. Conectar.' },
                { name: 'heroTitle2_pt', label: 'Título Destaque (Linha 2)', type: 'text', defaultValue: 'Resolver.' },
                { name: 'heroSubtitle_pt', label: 'Subtítulo', type: 'textarea', defaultValue: 'Combinamos visão estratégica e atuação técnica em Direito Empresarial, Regulatório e Tecnologia. Oferecemos suporte completo para empresas, empreendedores e instituições que buscam segurança e crescimento sustentável.' },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                { name: 'heroTitle1_en', label: 'Main Title (Line 1)', type: 'text', defaultValue: 'Think. Connect.' },
                { name: 'heroTitle2_en', label: 'Highlighted Title (Line 2)', type: 'text', defaultValue: 'Solve.' },
                { name: 'heroSubtitle_en', label: 'Subtitle', type: 'textarea', defaultValue: 'We combine strategic vision and technical expertise in Corporate, Regulatory, and Technology Law. We offer comprehensive support for businesses, entrepreneurs, and institutions seeking legal security and sustainable growth.' },
              ],
            },
            { name: 'heroBgImage', label: 'Imagem de Fundo (Hero)', type: 'upload', relationTo: 'media' },
          ]
        },
        // ─── SOBRE NÓS ─────────────────────────────────────
        {
          label: 'Sobre Nós',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                { name: 'aboutTag_pt', label: 'Etiqueta Superior', type: 'text', defaultValue: 'sobre nós' },
                { name: 'aboutTitle1_pt', label: 'Título (Parte 1)', type: 'text', defaultValue: 'Acreditamos que o' },
                { name: 'aboutTitle2_pt', label: 'Título Destacado (Cor)', type: 'text', defaultValue: 'Direito' },
                { name: 'aboutTitle3_pt', label: 'Resto do Título (Parte 3)', type: 'text', defaultValue: ' é uma ferramenta de transformação' },
                { name: 'aboutText1_pt', label: 'Parágrafo 1', type: 'textarea', defaultValue: 'Atuamos de forma integrada em consultoria jurídica e advocacia contenciosa, unindo conhecimento acadêmico sólido e experiência de mercado para apoiar empresas, empreendedores e pessoas físicas em diferentes áreas.' },
                { name: 'aboutText2_pt', label: 'Parágrafo 2', type: 'textarea', defaultValue: 'Nosso foco está em Direito Regulatório e Tecnologia, mas também atuamos em advocacia empresarial, consultoria contratual, Direito Cível e demandas institucionais. Trabalhamos de forma preventiva e resolutiva, garantindo segurança jurídica e estratégias eficazes em cada etapa do processo.' },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                { name: 'aboutTag_en', label: 'Upper Tag', type: 'text', defaultValue: 'about us' },
                { name: 'aboutTitle1_en', label: 'Title (Part 1)', type: 'text', defaultValue: 'We believe that' },
                { name: 'aboutTitle2_en', label: 'Highlighted Title (Color)', type: 'text', defaultValue: 'Law' },
                { name: 'aboutTitle3_en', label: 'Rest of Title (Part 3)', type: 'text', defaultValue: ' is a tool for transformation' },
                { name: 'aboutText1_en', label: 'Paragraph 1', type: 'textarea', defaultValue: 'We provide integrated legal consulting and litigation services, combining solid academic knowledge with market experience to support businesses, entrepreneurs, and individuals across various fields.' },
                { name: 'aboutText2_en', label: 'Paragraph 2', type: 'textarea', defaultValue: 'Our core focus is Regulatory and Technology Law, but we also handle corporate litigation, contract consulting, civil law, and institutional demands. We work proactively and decisively, ensuring legal certainty and effective strategies at every step.' },
              ],
            },
            { name: 'aboutImage', label: 'Imagem Lateral', type: 'upload', relationTo: 'media' },
          ]
        },
        // ─── ÁREAS DE ATUAÇÃO ───────────────────────────────
        {
          label: 'Áreas de Atuação',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                { name: 'areasTag_pt', label: 'Etiqueta/Tag', type: 'text', defaultValue: 'como trabalhamos' },
                { name: 'areasTitle_pt', label: 'Título Principal', type: 'text', defaultValue: 'Conheça nossas áreas\nde atuação' },
                { name: 'areasSubtitle_pt', label: 'Subtítulo Longo', type: 'textarea', defaultValue: 'Atendemos empresas de tecnologia, empreendedores e clientes em geral, sempre com soluções jurídicas sob medida. Nosso trabalho vai além de resolver conflitos: buscamos antecipar riscos, gerar oportunidades e fortalecer a tomada de decisões.' },
                {
                  name: 'areasBoxes_pt',
                  label: 'Caixas de Áreas (PT)',
                  type: 'array',
                  minRows: 0,
                  maxRows: 4,
                  fields: [
                    { name: 'title', label: 'Título da Área', type: 'text' },
                    { name: 'description', label: 'Descrição Curta', type: 'textarea' },
                    { name: 'buttonText', label: 'Texto do Botão', type: 'text' },
                  ],
                  defaultValue: [
                    { title: 'Regulatório e Tecnologia', description: 'Apoiamos negócios inovadores em suas relações com o governo e órgãos reguladores, oferecendo assessoria jurídica para adequação às normas, participação em consultas públicas, elaboração de pareceres técnicos e estratégias que assegurem conformidade sem comprometer a inovação.', buttonText: 'entre em contato' },
                    { title: 'Judicial', description: 'Atuamos em processos cíveis, empresariais e regulatórios, com foco em defesa estratégica em conflitos complexos. Nossa advocacia empresarial busca soluções ágeis, justas e alinhadas aos interesses de longo prazo dos clientes.', buttonText: 'entre em contato' },
                    { title: 'Consultivo', description: 'Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.', buttonText: 'entre em contato' },
                    { title: 'Legislativo e Institucional', description: 'Acompanhamos propostas de lei e políticas públicas que impactam setores estratégicos, promovendo diálogo direto com entes públicos para a construção de marcos jurídicos modernos. Essa atuação fortalece a posição dos clientes e garante sustentabilidade jurídica no longo prazo.', buttonText: 'entre em contato' },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                { name: 'areasTag_en', label: 'Tag', type: 'text', defaultValue: 'how we work' },
                { name: 'areasTitle_en', label: 'Main Title', type: 'text', defaultValue: 'Discover our areas\nof expertise' },
                { name: 'areasSubtitle_en', label: 'Long Subtitle', type: 'textarea', defaultValue: 'We serve technology companies, entrepreneurs, and general clients, always offering tailored legal solutions. Our work goes beyond resolving conflicts: we proactively mitigate risks, create opportunities, and empower decision-making.' },
                {
                  name: 'areasBoxes_en',
                  label: 'Area Boxes (EN)',
                  type: 'array',
                  minRows: 0,
                  maxRows: 4,
                  fields: [
                    { name: 'title', label: 'Area Title', type: 'text' },
                    { name: 'description', label: 'Short Description', type: 'textarea' },
                    { name: 'buttonText', label: 'Button Text', type: 'text' },
                  ],
                  defaultValue: [
                    { title: 'Regulatory & Technology', description: 'We support innovative businesses in their relations with government and regulatory bodies, providing legal counsel for compliance, participation in public consultations, technical opinions, and strategies that guarantee compliance without compromising innovation.', buttonText: 'get in touch' },
                    { title: 'Litigation', description: 'We practice in civil, corporate, and regulatory disputes, focusing on strategic defense in complex conflicts. Our corporate advocacy seeks agile, fair solutions aligned with our clients\' long-term interests.', buttonText: 'get in touch' },
                    { title: 'Consulting', description: 'We offer complete legal consulting, including risk analysis, drafting and reviewing contracts, and legal opinions. Our goal is to provide security to corporate and individual decisions, reducing uncertainties and strengthening corporate governance.', buttonText: 'get in touch' },
                    { title: 'Legislative & Institutional', description: 'We monitor bills and public policies impacting strategic sectors, promoting direct dialogue with public entities to build modern legal frameworks. This approach strengthens our clients\' positions and ensures long-term legal sustainability.', buttonText: 'get in touch' },
                  ],
                },
              ],
            },
          ]
        },
        // ─── BANNER FIXO ────────────────────────────────────
        {
          label: 'Banner Fixo',
          fields: [
            { name: 'bannerImage', label: 'Imagem do Banner Fixo', type: 'upload', relationTo: 'media' },
          ]
        },
        // ─── NÚMEROS ────────────────────────────────────────
        {
          label: 'Números e Estatísticas',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                { name: 'numbersTitle_pt', label: 'Título Principal', type: 'text', defaultValue: 'O escritório em\nnúmeros' },
                {
                  name: 'stats_pt',
                  label: 'Lista de Estatísticas (PT)',
                  type: 'array',
                  minRows: 0,
                  maxRows: 4,
                  fields: [
                    { name: 'number', label: 'Número/Dado (ex: 15)', type: 'text' },
                    { name: 'description', label: 'Descrição', type: 'textarea' },
                  ],
                  defaultValue: [
                    { number: '15 anos de experiência', description: 'Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.' },
                    { number: 'Atuação internacional', description: 'Experiência em projetos no Mercosul, América Latina, África, Europa, Estados Unidos e em organismos multilaterais como a ONU, trazendo visão global às soluções jurídicas no Brasil.' },
                    { number: 'Formação de excelência', description: 'LL.M. em Law & Technology pela UC Berkeley, mestrado em Cybersecurity & Regulation pela Universidade de Brasília e especialização no George C. Marshall European Center for Security Studies.' },
                    { number: 'Liderança em políticas digitais', description: 'Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.' },
                  ],
                },
                { name: 'numbersFooterTitle_pt', label: 'Título Inferior da Seção', type: 'text', defaultValue: 'Transformação da complexidade em vantagem' },
                { name: 'numbersFooterDesc_pt', label: 'Parágrafo Inferior da Seção', type: 'textarea', defaultValue: 'Compromisso em transformar complexidade regulatória, conflitos jurídicos e demandas empresariais em soluções seguras e competitivas para nossos clientes.' },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                { name: 'numbersTitle_en', label: 'Main Title', type: 'text', defaultValue: 'The firm in\nnumbers' },
                {
                  name: 'stats_en',
                  label: 'Statistics List (EN)',
                  type: 'array',
                  minRows: 0,
                  maxRows: 4,
                  fields: [
                    { name: 'number', label: 'Number/Stat', type: 'text' },
                    { name: 'description', label: 'Description', type: 'textarea' },
                  ],
                  defaultValue: [
                    { number: '15 years of experience', description: 'We offer complete legal consulting, with risk analysis, drafting and review of contracts and legal opinions. The goal is to provide security to business and individual decisions, reducing uncertainties and strengthening corporate governance.' },
                    { number: 'International reach', description: 'Experience in projects across Mercosur, Latin America, Africa, Europe, the United States, and in multilateral organizations like the UN, bringing a global perspective to legal solutions in Brazil.' },
                    { number: 'Excellence in education', description: 'LL.M. in Law & Technology from UC Berkeley, Master\'s in Cybersecurity & Regulation from the University of Brasília, and specialization at the George C. Marshall European Center for Security Studies.' },
                    { number: 'Leadership in digital policy', description: 'Active participation in the formulation of digital public policies and serving as Policy Manager in Brazil for ALAI (Latin American Internet Association), bridging innovation, regulation, and traditional legal practice.' },
                  ],
                },
                { name: 'numbersFooterTitle_en', label: 'Bottom Title', type: 'text', defaultValue: 'Turning complexity into leverage' },
                { name: 'numbersFooterDesc_en', label: 'Bottom Paragraph', type: 'textarea', defaultValue: 'Committed to transforming regulatory complexity, legal conflicts, and corporate demands into secure and competitive advantages for our clients.' },
              ],
            },
          ]
        },
        // ─── ADVOGADOS ──────────────────────────────────────
        {
          label: 'Advogados',
          fields: [
            {
              type: 'collapsible',
              label: '🇧🇷 Português',
              fields: [
                { name: 'lawyersTitle_pt', label: 'Título da Seção', type: 'text', defaultValue: 'Nossos Advogados' },
                {
                  name: 'lawyersList_pt',
                  label: 'Lista de Advogados (PT)',
                  type: 'array',
                  maxRows: 4,
                  fields: [
                    { name: 'name', label: 'Nome Completo', type: 'text' },
                    { name: 'role', label: 'Cargo (ex: Sócio)', type: 'text' },
                    { name: 'bio', label: 'Biografia Curta', type: 'textarea' },
                    { name: 'email', label: 'E-mail Profissional', type: 'text' },
                    { name: 'linkedin', label: 'URL do LinkedIn', type: 'text' },
                    { name: 'image', label: 'Foto de Perfil', type: 'upload', relationTo: 'media' },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🇺🇸 English',
              fields: [
                { name: 'lawyersTitle_en', label: 'Section Title', type: 'text', defaultValue: 'Our Lawyers' },
                {
                  name: 'lawyersList_en',
                  label: 'Lawyers List (EN)',
                  type: 'array',
                  maxRows: 4,
                  fields: [
                    { name: 'name', label: 'Full Name', type: 'text' },
                    { name: 'role', label: 'Role (e.g., Partner)', type: 'text' },
                    { name: 'bio', label: 'Short Bio', type: 'textarea' },
                    { name: 'email', label: 'Work E-mail', type: 'text' },
                    { name: 'linkedin', label: 'LinkedIn URL', type: 'text' },
                    { name: 'image', label: 'Profile Photo', type: 'upload', relationTo: 'media' },
                  ],
                },
              ],
            },
          ]
        },
      ]
    }
  ],
}
