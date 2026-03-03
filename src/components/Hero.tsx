import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[860px] flex items-center pt-[150px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 bg-[#d9d9d9]">
                <Image
                    src="/assets/86d273113bb1a35613663a9ee773c9bc0f6a01e8.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* The Figma design has an inset-0 overflow-hidden with img size 131% */}
            </div>

            <div className="relative z-10 max-w-[1512px] w-full mx-auto px-10 lg:px-32">
                <h1 className="font-handel text-5xl md:text-7xl lg:text-[84px] text-white leading-tight mb-12">
                    Pensar. Conectar. <br className="hidden md:block" />
                    <span className="text-secondary text-[#ffdc2e]">Resolver.</span>
                </h1>

                <div className="max-w-[655px]">
                    <p className="font-motiva text-xl lg:text-[25px] text-white leading-[30px] font-light">
                        Combinamos visão estratégica e atuação técnica em Direito Empresarial, Regulatório e Tecnologia. Oferecemos suporte completo para empresas, empreendedores e instituições que buscam segurança e crescimento sustentável.
                    </p>
                </div>
            </div>
        </section>
    );
}
