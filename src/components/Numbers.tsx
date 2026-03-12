import Image from "next/image";

export default function Numbers() {
    const leftItems = [
        { title: "15 anos de experiência", description: "Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa." },
        { title: "Formação de excelência", description: "LL.M. em Law & Technology pela UC Berkeley, mestrado em Cybersecurity & Regulation pela Universidade de Brasília e especialização no George C. Marshall European Center for Security Studies." },
        { title: "Transformação da complexidade em vantagem", description: "Compromisso em transformar complexidade regulatória, conflitos jurídicos e demandas empresariais em soluções seguras e competitivas para nossos clientes." }
    ];

    const rightItems = [
        { title: "Atuação internacional", description: "Experiência em projetos no Mercosul, América Latina, África, Europa, Estados Unidos e em organismos multilaterais como a ONU, trazendo visão global às soluções jurídicas no Brasil." },
        { title: "Liderança em políticas digitais", description: "Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional." }
    ];

    return (
        <section className="relative w-full py-32 lg:py-48 bg-background text-foreground">

            {/* Background Image Container */}
            <div className="absolute top-[100px] right-[10%] w-[80%] max-w-[1196px] h-[250px] lg:h-[370px] z-0">
                <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-[#d9d9d9]" />
                    <Image
                        src="/assets/azulejos.png"
                        alt="Escritório em números background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="max-w-[1512px] mx-auto px-10 lg:px-20 relative z-10 pt-[250px] lg:pt-[370px]">

                {/* Header Section */}
                <h2 className="font-handel text-4xl lg:text-[50px] leading-[1.1] mb-20 lg:mb-32">
                    O escritório em <br />
                    números
                </h2>

                {/* Numbers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-32 lg:ml-20">

                    {/* Left Column */}
                    <div className="flex flex-col gap-16">
                        {leftItems.map((item, index) => (
                            <div key={index} className="flex flex-col group">
                                <div className="w-full max-w-[537px] h-px bg-current opacity-30 mb-6 group-hover:bg-primary transition-colors" />
                                <h3 className="font-handel text-2xl lg:text-[35px] leading-tight mb-6 pr-4">
                                    {item.title}
                                </h3>
                                <p className="font-motiva text-lg lg:text-[20px] leading-[30px] font-light max-w-[511px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-16">
                        {rightItems.map((item, index) => (
                            <div key={index} className="flex flex-col group">
                                <div className="w-full max-w-[537px] h-px bg-current opacity-30 mb-6 group-hover:bg-primary transition-colors" />
                                <h3 className="font-handel text-2xl lg:text-[35px] leading-tight mb-6 pr-4">
                                    {item.title}
                                </h3>
                                <p className="font-motiva text-lg lg:text-[20px] leading-[30px] font-light max-w-[511px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
