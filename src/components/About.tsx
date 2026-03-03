import Image from "next/image";

export default function About() {
    return (
        <section id="quem-somos" className="relative w-full py-32 lg:py-48 bg-background">
            {/* Decorative yellow bar behind content */}
            <div className="hidden lg:block absolute bg-[#ffdc2e] mix-blend-multiply h-[255px] w-[80%] right-[-10%] top-[100px] z-0" />

            <div className="max-w-[1512px] mx-auto px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row gap-20">

                {/* Left Column: Text Content */}
                <div className="flex-1 lg:pl-10">
                    <p className="font-motiva font-medium text-primary text-[16px] leading-[20px] uppercase tracking-widest mb-6">
                        sobre nós
                    </p>

                    <h2 className="font-handel text-4xl lg:text-[50px] leading-[1.1] text-foreground mb-12">
                        Acreditamos que o <br className="hidden lg:block" />
                        <span className="text-primary">Direito</span> é uma <br className="hidden lg:block" />
                        ferramenta de transformação
                    </h2>

                    <div className="font-motiva text-lg lg:text-[20px] leading-[30px] text-foreground font-light max-w-[625px] flex flex-col gap-6">
                        <p>
                            Atuamos de forma integrada em consultoria jurídica e advocacia contenciosa, unindo conhecimento acadêmico sólido e experiência de mercado para apoiar empresas, empreendedores e pessoas físicas em diferentes áreas.
                        </p>
                        <p>
                            Nosso foco está em Direito Regulatório e Tecnologia, mas também atuamos em advocacia empresarial, consultoria contratual, Direito Cível e demandas institucionais. Trabalhamos de forma preventiva e resolutiva, garantindo segurança jurídica e estratégias eficazes em cada etapa do processo.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 relative min-h-[400px] lg:h-[586px] w-full max-w-[467px] mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-[#d9d9d9]">
                        <Image
                            src="/assets/6e8235f6c9c82055692e7a321b167e3a45be58d6.png"
                            alt="Sobre nós"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
