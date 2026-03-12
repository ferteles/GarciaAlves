"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatestPosts from "@/components/LatestPosts";

const imgRectangle1 = "/assets/hero-bg.png";
const imgRectangle7 = "/assets/corporate-space.png";
const imgRectangle8 = "/assets/azulejos.png";
const imgRectangle10 = "/assets/sergio-garcia-alves.png";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

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
            {t.hero.title1}<br />
            <span className="text-accent">{t.hero.title2}</span>
          </h1>
          <p className="font-motiva text-[18px] md:text-[20px] lg:text-[25px] leading-[1.2] text-white max-w-[655px]">
            {t.hero.subtitle}
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
            <span className="font-motiva uppercase text-primary font-medium tracking-[0.2em] text-[16.6px] mb-6 block">{t.about.tag}</span>
            <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark mb-10">
              {t.about.title1}<br />
              <span className="text-primary">{t.about.title2}</span>{t.about.title3}
            </h2>
            <div className="font-motiva text-gray-dark text-[18px] lg:text-[20px] leading-[1.5]">
              <p className="mb-6">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
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
          <span className="font-motiva uppercase text-primary font-medium tracking-[0.2em] text-[16.6px] mb-6 block absolute top-[65px]">{t.expertise.tag}</span>
          <div className="mb-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mt-4">
            <h2 className="font-handel text-[40px] lg:text-[50px] leading-[1] text-gray-dark lg:col-span-7 w-full lg:max-w-[597px]">
              <span style={{ whiteSpace: "pre-line" }}>{t.expertise.title}</span>
            </h2>
            <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] text-gray-dark lg:col-span-5 w-full lg:max-w-[469px]">
              {t.expertise.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-[100px]">
            {/* Box 1 */}
            <div className="border-t-[2px] border-primary pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">{t.expertise.box1.title}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[510px]">{t.expertise.box1.desc}</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">{t.expertise.contact_btn}</span>
              </div>
            </div>
            {/* Box 2 */}
            <div className="border-t-[2px] border-black pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">{t.expertise.box2.title}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[506px]">{t.expertise.box2.desc}</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">{t.expertise.contact_btn}</span>
              </div>
            </div>
            {/* Box 3 */}
            <div className="border-t-[2px] border-primary pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">{t.expertise.box3.title}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[511px]">{t.expertise.box3.desc}</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">{t.expertise.contact_btn}</span>
              </div>
            </div>
            {/* Box 4 */}
            <div className="border-t-[2px] border-black pt-10">
              <h3 className="font-handel text-[28px] lg:text-[35px] mb-6 leading-[1.2]">{t.expertise.box4.title}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[478px]">{t.expertise.box4.desc}</p>
              <div className="mt-12 flex items-center gap-6 cursor-pointer group w-fit">
                <span className="block h-[2px] w-[50px] lg:w-[206px] bg-black group-hover:bg-primary transition-colors shrink-0"></span>
                <span className="block font-handel text-[20px] lg:text-[26px] leading-none translate-y-[2px]">{t.expertise.contact_btn}</span>
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
            <span style={{ whiteSpace: "pre-line" }}>{t.numbers.title}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24 mb-24 lg:mb-32">
            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">{t.numbers.n1}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">{t.numbers.d1}</p>
            </div>

            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">{t.numbers.n2}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">{t.numbers.d2}</p>
            </div>

            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">{t.numbers.n3}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">{t.numbers.d3}</p>
            </div>

            <div className="border-t-[2px] border-black pt-8 w-full">
              <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4 lg:max-w-[390px] leading-[1.1]">{t.numbers.n4}</h3>
              <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] max-w-[537px]">{t.numbers.d4}</p>
            </div>
          </div>

          <div className="border-t-[2px] border-black pt-10 w-full lg:max-w-[827px]">
            <h3 className="font-handel text-[28px] lg:text-[35px] mt-2 mb-4">{t.numbers.footer_title}</h3>
            <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] lg:max-w-[968px]">{t.numbers.footer_desc}</p>
          </div>
        </div>
      </section>

      {/* Advogados */}
      <section id="advogados" className="py-20 lg:py-[112px] px-6 lg:px-[123px] bg-primary text-white">
        <div className="max-w-[1512px] mx-auto w-full">
          <h2 className="font-handel text-[40px] lg:text-[50px] mb-16 lg:ml-2">{t.lawyers.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-[47px] gap-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[343/402] w-full overflow-hidden bg-[#d9d9d9] mb-8 relative">
                  <img src={imgRectangle10} alt="Sérgio Garcia Alves" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-handel text-[24px] lg:text-[29.98px] leading-[1.1] mb-2 border-t-[2px] border-[#85d7a974] pt-5">Sérgio Garcia Alves</h3>
                <h4 className="font-motiva font-bold uppercase text-[14px] lg:text-[16px] text-white mb-4">{t.lawyers.role}</h4>
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
              {t.publications.title}
            </h2>
          </div>

          <LatestPosts />
          
          <div className="hidden lg:block absolute left-0 right-0 h-[2px] bg-black bottom-[22px] lg:bottom-[22px] -z-0"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
