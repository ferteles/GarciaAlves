import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const imgRectangle1 = "http://localhost:3845/assets/86d273113bb1a35613663a9ee773c9bc0f6a01e8.png";
const imgRectangle7 = "http://localhost:3845/assets/6e8235f6c9c82055692e7a321b167e3a45be58d6.png";
const imgRectangle8 = "http://localhost:3845/assets/1cd630051da6a703f68195535fc1cd5f62bce814.png";
const imgRectangle10 = "http://localhost:3845/assets/ade156cb737fa832bc5d0210a0475d4e054f3942.png";
const imgRectangle19 = "http://localhost:3845/assets/92b7e35d29404d2522ca019474ce18914a35b4c7.png";

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
      <section id="quem-somos" className="py-16 lg:pt-32 lg:pb-24 px-6 lg:px-[123px] relative bg-overlay z-20">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start max-w-[1512px] mx-auto">
          <div className="md:col-span-12 lg:col-span-6 w-full lg:max-w-[597px]">
            <span className="font-motiva uppercase text-primary font-medium tracking-[0.2em] text-[16.6px] mb-6 block">sobre nós</span>
            <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark mb-6">
              Acreditamos que o <br className="hidden lg:block" />
              <span className="text-primary">Direito</span> é uma ferramenta de transformação
            </h2>
          </div>
          <div className="md:col-span-12 lg:col-span-6 font-motiva text-gray-dark text-[18px] lg:text-[20px] leading-[1.5] lg:max-w-[625px]">
            <p className="mb-6">
              Atuamos de forma integrada em consultoria jurídica e advocacia contenciosa, unindo conhecimento acadêmico sólido e experiência de mercado para apoiar empresas, empreendedores e pessoas físicas em diferentes áreas.
            </p>
            <p>
              Nosso foco está em Direito Regulatório e Tecnologia, mas também atuamos em advocacia empresarial, consultoria contratual, Direito Cível e demandas institucionais. Trabalhamos de forma preventiva e resolutiva, garantindo segurança jurídica e estratégias eficazes em cada etapa do processo.
            </p>
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

      {/* O Escritório em Números */}
      <section className="pt-24 pb-32 lg:pt-[100px] lg:pb-[150px] px-6 lg:px-[123px] bg-overlay">
        <div className="max-w-[1512px] mx-auto w-full relative">
          <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark mb-[80px]">
            O escritório em<br />números
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
            <div className="order-2 lg:order-1 relative z-10 space-y-16">
              <div className="border-t-[2px] border-primary pt-8 w-full lg:max-w-[537px]">
                <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">15 anos de experiência</h3>
                <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[511px]">Oferecemos consultoria jurídica completa, com análise de riscos, elaboração e revisão de contratos e pareceres jurídicos. O objetivo é dar segurança às decisões empresariais e individuais, reduzindo incertezas e fortalecendo a governança corporativa.</p>
              </div>
              <div className="border-t-[2px] border-primary pt-8 w-full lg:max-w-[537px]">
                <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">Formação de excelência</h3>
                <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[511px]">LL.M. em Law & Technology pela UC Berkeley, mestrado em Cybersecurity & Regulation pela Universidade de Brasília e especialização no George C. Marshall European Center for Security Studies.</p>
              </div>
              <div className="w-[100vw] relative -translate-x-6 lg:translate-x-0 lg:w-[1196px] h-[370px] mt-16 bg-[#d9d9d9] pointer-events-none lg:absolute lg:top-[calc(100%+32px)] lg:-left-[123px] z-0">
                <img src={imgRectangle8} alt="Office Space 2" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-16 lg:pl-4">
              <div className="border-t-[2px] border-primary pt-8 w-full lg:max-w-[537px]">
                <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">Atuação internacional</h3>
                <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[511px]">Experiência em projetos no Mercosul, América Latina, África, Europa, Estados Unidos e em organismos multilaterais como a ONU, trazendo visão global às soluções jurídicas no Brasil.</p>
              </div>
              <div className="border-t-[2px] border-primary pt-8 w-full lg:max-w-[537px]">
                <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4 lg:max-w-[390px] leading-[1.1]">Liderança em políticas digitais</h3>
                <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[511px]">Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.</p>
              </div>
              <div className="w-[100vw] relative -translate-x-6 lg:translate-x-0 lg:w-[467px] h-[400px] lg:h-[586px] absolute top-[0] lg:-top-[150px] right-0 lg:right-[-123px] bg-[#d9d9d9] z-0 pointer-events-none">
                <img src={imgRectangle7} alt="Corporate space" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-[0.8]" />
              </div>
            </div>
          </div>

          <div className="mt-[60px] lg:mt-[220px] border-t-[2px] border-primary pt-10 w-full lg:max-w-[827px] relative z-10">
            <h3 className="font-handel text-[28px] lg:text-[35px] mt-4 mb-4">Transformação da complexidade em vantagem</h3>
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
                <h3 className="font-handel text-[24px] lg:text-[29.98px] leading-[1.1] mb-5 border-t-[2px] border-[#85d7a974] pt-5">Sérgio Garcia Alves</h3>
                <p className="font-motiva text-[16px] lg:text-[20px] leading-[30px] text-white overflow-hidden mb-6 h-[120px] lg:max-w-[291px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <a href="#" className="font-handel text-[18px] lg:text-[19.1px] underline hover:text-accent transition-colors">Linkedin</a>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[47px] mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group block cursor-pointer">
                <div className="w-full aspect-[527/230] bg-[#d9d9d9] overflow-hidden mb-6 relative">
                  <img src={imgRectangle19} alt="Post Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-handel text-[24px] lg:text-[33.17px] leading-[1.1] mb-4 group-hover:text-primary transition-colors border-t-[1.46px] border-black pt-4">Liderança em políticas digitais</h3>
                <p className="font-motiva text-[14.5px] leading-[21.8px] text-gray-dark mb-5 overflow-hidden h-[65px]">Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.</p>
                <span className="font-motiva text-[14.5px] tracking-normal text-gray-dark group-hover:text-primary transition-colors">Leia mais</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:mt-[100px] pt-10 relative">
            <div className="hidden lg:block absolute left-[50%] -translate-x-1/2 top-0 w-[478px] h-[2px] bg-black"></div>
            <Link href="/blog" className="font-handel text-[24px] lg:text-[35px] text-gray-dark hover:text-primary transition-colors inline-block text-center mt-6 lg:mt-0">
              Confira todas as publicações
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
