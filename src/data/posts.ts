export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string[];
}

export const posts: BlogPost[] = [
    {
        slug: "lideranca-politicas-digitais",
        title: "Liderança em políticas digitais",
        excerpt: "Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.",
        content: `
A transformação digital trouxe consigo um conjunto inédito de desafios regulatórios e éticos. Nesse cenário, o papel de um Policy Manager torna-se crucial para construir pontes entre o ecossistema de inovação tecnológica e o setor público.

Atuando junto à ALAI (Latin American Internet Association), o foco tem sido a formulação de políticas públicas equilibradas que não apenas protegem os usuários e dados sensíveis, mas também garantem um ambiente propício ao crescimento de startups e empresas de base tecnológica. 

A intersecção entre o direito tradicional e a regulação emergente exige constante adaptação e um diálogo permanente com os diversos setores da sociedade para garantir um futuro digital mais seguro e inclusivo no Brasil e na América Latina.
    `,
        image: "/assets/post-thumbnail.png",
        date: "14 Out 2026",
        category: ["Inovação", "Regulação", "Políticas Públicas"]
    },
    {
        slug: "regulacao-inteligencia-artificial",
        title: "Regulação da Inteligência Artificial",
        excerpt: "Análise dos frameworks regulatórios emergentes no Brasil e no mundo para o uso ético e responsável da Inteligência Artificial no setor corporativo.",
        content: `
A Inteligência Artificial (IA) tem revolucionado a forma como as empresas operam, automatizando processos e oferecendo insights profundos baseados em dados. Contudo, essa rápida adoção também levanta preocupações significativas sobre privacidade, viés algorítmico e responsabilidade civil.

Neste artigo, exploramos os principais desafios e as tendências de regulação de IA, analisando projetos de lei locais e diretrizes internacionais que visam estabelecer um "sandbox regulatório" seguro para o desenvolvimento tecnológico sem abrir mão dos direitos fundamentais dos cidadãos.
    `,
        image: "/assets/post-thumbnail.png",
        date: "05 Set 2026",
        category: ["Tecnologia", "Inteligência Artificial"]
    },
    {
        slug: "lgpd-e-inovacao",
        title: "LGPD frente aos desafios da Inovação",
        excerpt: "Como empresas de tecnologia podem alinhar suas práticas de coleta de dados às exigências da LGPD sem comprometer o desenvolvimento de novos produtos.",
        content: `
A Lei Geral de Proteção de Dados (LGPD) representa um marco civilizatório para a privacidade e o controle de dados pessoais no Brasil. No entanto, para o setor de inovação e tecnologia, sua implementação gerou algumas incertezas iniciais.

Discutiremos neste material abordagens de "Privacy by Design", onde a privacidade do usuário é considerada desde a concepção do produto ou serviço, permitindo que a compliance com a LGPD sirva como um diferencial competitivo, fortalecendo a confiança do consumidor num mercado cada vez mais data-driven.
    `,
        image: "/assets/post-thumbnail.png",
        date: "22 Ago 2026",
        category: ["Dados", "Privacidade"]
    },
    {
        slug: "startups-marcos-legais",
        title: "O Marco Legal das Startups",
        excerpt: "Impactos práticos do Marco Legal das Startups no fomento ao empreendedorismo tecnológico e na segurança jurídica para investidores-anjo.",
        content: `
Com o objetivo de desburocratizar e fomentar o ecossistema de inovação, o Marco Legal das Startups trouxe novidades importantes, como a figura do investidor-anjo e regras de licitação pública exclusivas para startups.

Examinamos como essas ferramentas legais podem ser aproveitadas na prática por novos empreendedores para captar recursos de maneira mais segura, otimizar estruturas societárias e estabelecer modelos contratuais flexíveis adequados ao alto risco e potencial de crescimento dessas empresas.
    `,
        image: "/assets/post-thumbnail.png",
        date: "10 Jul 2026",
        category: ["Inovação", "Startups", "Societário"]
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}

// Retorna os últimos N posts exceto o atual, como sugestões
export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
    return posts.filter(post => post.slug !== currentSlug).slice(0, count);
}
