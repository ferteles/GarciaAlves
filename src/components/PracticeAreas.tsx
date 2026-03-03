import Image from "next/image";

export default function PracticeAreas() {
    const areas = [
        {
            title: "Regulatório e Tecnologia",
            description: "Apoiamos negócios inovadores em suas relações com o governo e órgãos reguladores, oferecendo assessoria jurídica para adequação às normas, participação em consultas públicas, elaboração de pareceres técnicos e estratégias que assegurem conformidade sem comprometer a inovação."
        },
        {
            title: "Judicial",
            description: "Atuamos em processos cíveis, empresariais e regulatórios, com foco em defesa estratégica em conflitos complexos. Nossa advocacia empresarial busca soluções ágeis, justas e alinhadas aos interesses de longo prazo dos clientes."
        },
        {
            title: "Consultivo",
            description: "Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa."
        },
        {
            title: "Legislativo e Institucional",
            description: "Acompanhamos propostas de lei e políticas públicas que impactam setores estratégicos, promovendo diálogo direto com entes públicos para a construção de marcos jurídicos modernos. Essa atuação fortalece a posição dos clientes e garante sustentabilidade jurídica no longo prazo."
        }
    ];

    return (
        <section id="areas" className="relative w-full py-32 lg:py-48 bg-accent text-foreground">
            <div className="max-w-[1512px] mx-auto px-10 lg:px-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 mb-20 lg:mb-32">
                    <p className="font-motiva font-medium text-primary text-[16px] leading-[20px] uppercase tracking-widest lg:mt-6 whitespace-nowrap">
                        como trabalhamos
                    </p>
                    <div className="flex-1">
                        <h2 className="font-handel text-4xl lg:text-[50px] leading-[1.1] mb-8">
                            Conheça nossas áreas <br className="hidden lg:block" />
                            de atuação
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="font-motiva text-xl leading-[30px] font-light max-w-[469px]">
                            Atendemos empresas de tecnologia, empreendedores e clientes em geral, sempre com soluções jurídicas sob medida. Nosso trabalho vai além de resolver conflitos: buscamos antecipar riscos, gerar oportunidades e fortalecer a tomada de decisões.
                        </p>
                    </div>
                </div>

                {/* Practice Areas Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-32">
                    {areas.map((area, index) => (
                        <div key={index} className="flex flex-col g-6">
                            <div className="w-full h-px bg-current opacity-30 mb-6" />
                            <h3 className="font-handel text-3xl lg:text-[35px] mb-6">
                                {area.title}
                            </h3>
                            <p className="font-motiva text-lg lg:text-[20px] leading-[30px] font-light max-w-[510px]">
                                {area.description}
                            </p>

                            <button className="mt-8 self-start flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                                <span className="font-handel text-2xl lg:text-[26px]">entre em contato</span>
                                <span className="w-12 h-px bg-current group-hover:bg-primary transition-colors" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
