import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const imgRectangle1 = "/assets/86d273113bb1a35613663a9ee773c9bc0f6a01e8.png";
const imgRectangle7 = "/assets/6e8235f6c9c82055692e7a321b167e3a45be58d6.png";
const imgRectangle8 = "/assets/1cd630051da6a703f68195535fc1cd5f62bce814.png";
const imgRectangle10 = "/assets/ade156cb737fa832bc5d0210a0475d4e054f3942.png";
const imgRectangle19 = "/assets/92b7e35d29404d2522ca019474ce18914a35b4c7.png";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-foreground w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[860px] flex items-center bg-gray-dark px-6 lg:px-[123px]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-[#d9d9d9]">
          <img src={imgRectangle1} alt="Hero Background" className="w-full h-full object-cover mix-blend-multiply opacity-[0.85]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl pt-8 mx-auto w-full max-w-[1512px] lg:px-0">
          <h1 className="font-handel text-[50px] md:text-7xl lg:text-[83.6px] leading-[1] text-white mb-8">
            Pensar. Conectar.<br />
            <span className="text-accent">Resolver.</span>
          </h1>
          <p className="font-motiva text-[18px] md:text-[20px] lg:text-[25px] leading-[1.2] text-white max-w-[655px]">
            Combinamos visão estratégica e atuação técnica em Direito Empresarial, Regulatório e Tecnologia. Oferecemos suporte completo para empresas, empreendedores e instituições que buscam segurança e crescimento sustentável.
          </p>
        </div>

        {/* Yellow Overlap Box (from Top 879px to Top 1134px in Figma) */}
        <div className="absolute z-10 bottom-[-116px] left-6 lg:left-[123px] w-[calc(100%-48px)] lg:w-[1186px] h-[255px] bg-[#ffdc2e] mix-blend-multiply pointer-events-none" />
      </section>

      {/* Spacer for the overlapping visual */}
      <div className="h-[116px] w-full flex-shrink-0 bg-overlay relative z-0" />

      {/* Sobre Nós */}
      <section id="quem-somos" className="py-16 pb-24 lg:pt-32 lg:pb-32 px-6 lg:px-[123px] relative bg-overlay z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-[1512px] mx-auto">
          <div className="lg:col-span-6 w-full lg:max-w-[597px]">
            <span className="font-motiva uppercase text-primary font-medium tracking-[0.2em] text-[16.6px] mb-6 block">sobre nós</span>
            <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark mb-10">
              Acreditamos que o<br />
              <span className="text-primary">Direito</span> é uma ferramenta de transformação
            </h2>
            <div className="font-motiva text-gray-dark text-[18px] lg:text-[20px] leading-[1.5]">
              <p className="mb-6">
                Atuamos de forma integrada em consultoria jurídica e advocacia contenciosa, unindo conhecimento acadêmico sólido e experiência de mercado para apoiar empresas, empreendedores e pessoas físicas em diferentes áreas.
              </p>
              <p>
                Nosso foco está em Direito Regulatório e Tecnologia, mas também atuamos em advocacia empresarial, consultoria contratual, Direito Cível e demandas institucionais. Trabalhamos de forma preventiva e resolutiva, garantindo segurança jurídica e estratégias eficazes em cada etapa do processo.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 w-full lg:flex lg:justify-end mt-8 lg:mt-0">
            <div className="w-full lg:w-[484px] h-[300px] lg:h-[484px] bg-[#d9d9d9] overflow-hidden relative">
              <img src={imgRectangle8} alt="Azulejos Athos Bulcão" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="pt-32 pb-24 lg:pt-[150px] lg:pb-[200px] px-6 lg:px-[123px] bg-accent relative">
        <div className="max-w-[1512px] mx-auto w-full">
          <span className="font-motiva uppercase text-primary font-medium tracking-[0.2em] text-[16.6px] mb-6 block absolute top-[65px]">como trabalhamos</span>
          <div className="mb-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mt-4">
            <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark lg:col-span-7 w-full lg:max-w-[597px]">
              Conheça nossas áreas<br />de atuação
            </h2>
            <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] text-gray-dark lg:col-span-5 w-full lg:max-w-[469px]">
              Atendemos empresas de tecnologia, empreendedores e clientes em geral, sempre com soluções jurídicas sob medida. Nosso trabalho vai além de resolver conflitos: buscamos antecipar riscos, gerar oportunidades e fortalecer a tomada de decisões.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-[100px]">
            {/* Box 1 */}
            <div className="border-t-[2px] border-primary pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">Regulatório e Tecnologia</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[510px]">Apoiamos negócios inovadores em suas relações com o governo e órgãos reguladores, oferecendo assessoria jurídica para adequação às normas, participação em consultas públicas, elaboração de pareceres técnicos e estratégias que assegurem conformidade sem comprometer a inovação.</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">entre em contato</span>
              </div>
            </div>
            {/* Box 2 */}
            <div className="border-t-[2px] border-black pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">Judicial</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[506px]">Atuamos em processos cíveis, empresariais e regulatórios, com foco em defesa estratégica em conflitos complexos. Nossa advocacia empresarial busca soluções ágeis, justas e alinhadas aos interesses de longo prazo dos clientes.</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">entre em contato</span>
              </div>
            </div>
            {/* Box 3 */}
            <div className="border-t-[2px] border-primary pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">Consultivo</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[511px]">Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">entre em contato</span>
              </div>
            </div>
            {/* Box 4 */}
            <div className="border-t-[2px] border-black pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">Legislativo e Institucional</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[478px]">Acompanhamos propostas de lei e políticas públicas que impactam setores estratégicos, promovendo diálogo direto com entes públicos para a construção de marcos jurídicos modernos. Essa atuação fortalece a posição dos clientes e garante sustentabilidade jurídica no longo prazo.</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">entre em contato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Banner Image */}
      <div className="w-full h-[250px] md:h-[350px] lg:h-[450px] bg-[#d9d9d9] overflow-hidden">
        <img src={imgRectangle7} alt="Corporate space" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-[0.8]" />
      </div>

      {/* O Escritório em Números */}
      <section className="pt-24 pb-32 lg:pt-[100px] lg:pb-[150px] px-6 lg:px-[123px] bg-overlay">
        <div className="max-w-[1512px] mx-auto w-full">
          <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark mb-16 lg:mb-[100px]">
            O escritório em<br />números
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24 mb-24 lg:mb-32">
            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">15 anos de experiência</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.</p>
            </div>

            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">Atuação internacional</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">Experiência em projetos no Mercosul, América Latina, África, Europa, Estados Unidos e em organismos multilaterais como a ONU, trazendo visão global às soluções jurídicas no Brasil.</p>
            </div>

            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">Formação de excelência</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">LL.M. em Law & Technology pela UC Berkeley, mestrado em Cybersecurity & Regulation pela Universidade de Brasília e especialização no George C. Marshall European Center for Security Studies.</p>
            </div>

            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4 lg:max-w-[390px] leading-[1.1]">Liderança em políticas digitais</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.</p>
            </div>
          </div>

          <div className="border-t-[2px] border-black pt-10 w-full lg:max-w-[827px]">
            <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">Transformação da complexidade em vantagem</h3>
            <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] lg:max-w-[968px]">Compromisso em transformar complexidade regulatória, conflitos jurídicos e demandas empresariais em soluções seguras e competitivas para nossos clientes.</p>
          </div>
        </div>
      </section>

      {/* Advogados */}
      <section id="advogados" className="py-20 lg:py-[112px] px-6 lg:px-[123px] bg-primary text-white">
        <div className="max-w-[1512px] mx-auto w-full">
          <h2 className="font-handel text-[40px] lg:text-[50px] mb-16 lg:ml-2">Nossos Advogados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-[47px] gap-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[343/402] w-full overflow-hidden bg-[#d9d9d9] mb-8 relative">
                  <img src={imgRectangle10} alt="Sérgio Garcia Alves" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-handel text-[24px] lg:text-[29.98px] leading-[1.1] mb-2 border-t-[2px] border-[#85d7a974] pt-5">Sérgio Garcia Alves</h3>
                <h4 className="font-motiva font-bold uppercase text-[14px] lg:text-[16px] text-white mb-4">Sócio Fundador</h4>
                <p className="font-motiva text-[14px] lg:text-[16px] leading-[1.5] text-white overflow-hidden mb-6 h-[100px] lg:max-w-[291px]">
                  LL.M. em Law & Technology pela UC Berkeley. Mestrado em Cybersecurity pela UnB. Policy Manager na ALAI.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:sergio.alves@garciaalves.com" className="font-motiva text-[14px] lg:text-[15px] hover:text-accent transition-colors">sergio.alves@garciaalves.com</a>
                  <a href="#" className="font-handel text-[18px] lg:text-[19.1px] underline hover:text-accent transition-colors">Linkedin</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publicações */}
      <section className="py-20 lg:py-[150px] px-6 lg:px-[123px] bg-overlay">
        <div className="max-w-[1512px] mx-auto w-full relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
            <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark max-w-[484px]">
              Confira nossas publicações
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 mb-16 max-w-[1200px] mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group flex flex-col md:flex-row w-full bg-[#e2e2e2] cursor-pointer hover:bg-[#d5d5d5] transition-colors">
                <div className="w-full md:w-[300px] lg:w-[450px] aspect-[16/9] md:aspect-auto md:h-[220px] lg:h-[280px] bg-[#d9d9d9] overflow-hidden flex-shrink-0 relative">
                  <img src={imgRectangle19} alt="Post Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 flex-1 relative">
                  <h3 className="font-handel text-[24px] lg:text-[33.17px] leading-[1.1] mb-4 text-gray-dark">Liderança em políticas digitais</h3>
                  <p className="font-motiva text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 mb-6 max-w-[600px]">Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.</p>
                  <span className="font-motiva font-bold uppercase text-[14px] text-gray-dark group-hover:text-primary transition-colors block border-t-[2px] border-black pt-4 w-fit">Leia mais</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:mt-[60px] relative w-full pt-10">
            <Link href="/blog" className="font-handel text-[24px] lg:text-[35px] text-gray-dark hover:text-primary transition-colors inline-block text-center relative z-10 bg-overlay px-8">
              Confira todas as publicações
            </Link>
          </div>
          <div className="hidden lg:block absolute left-0 right-0 h-[2px] bg-black bottom-[22px] lg:bottom-[22px] -z-0"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
