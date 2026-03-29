import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPayload } from "payload"
import configPromise from '@payload-config'
import BlogTabs from "@/components/BlogTabs";
export const dynamic = 'force-dynamic';

export default async function BlogListing() {
    const payload = await getPayload({ config: configPromise })
    
    const postsData = await payload.find({
        collection: 'posts' as any,
        sort: '-date',
    })
    const posts: any[] = postsData.docs

    const dynamicCategories = new Set<string>();
    posts.forEach(post => {
        if (post.category && Array.isArray(post.category)) {
            post.category.forEach((cat: string) => dynamicCategories.add(cat));
        }
    });
    const categories = ["Todos", ...Array.from(dynamicCategories)];
    return (
        <main className="min-h-screen relative w-full overflow-x-hidden bg-[#F5F2E9]">
            <Navbar />

            {/* Hero Section Reestruturada */}
            <section className="relative w-full mt-[120px] lg:mt-[150px] bg-[#F5F2E9]">
                {/* Top Strip */}
                <div className="relative w-full h-[140px] bg-[#d9d9d9] overflow-hidden flex items-center">
                    <img src="/assets/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.85]" />
                    <div className="max-w-[1512px] mx-auto w-full px-6 lg:px-20 relative z-10 block">
                        <h2 className="font-handel text-[35px] md:text-[40px] lg:text-[45px] text-white my-0 leading-[1] tracking-tight">
                            Pensar. Conectar.<span className="text-accent underline decoration-transparent">Resolver.</span>
                        </h2>
                    </div>
                </div>

                {/* Accent Multiply Strip */}
                <div className="max-w-[1512px] mx-auto px-6 lg:px-20 w-full">
                    <div className="w-[80%] lg:w-[1186px] h-[30px] md:h-[60px] bg-accent mix-blend-multiply relative -mt-[15px] md:-mt-[30px] z-20 pointer-events-none" />
                </div>

                {/* Content Grid */}
                <div className="max-w-[1512px] mx-auto px-6 lg:px-20 pt-12 pb-16 lg:pt-16 lg:pb-24">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column */}
                        <div className="lg:col-span-7 flex flex-col pt-4">
                            <h1 className="font-handel text-[40px] md:text-[50px] leading-[1.05] mb-8 text-[#232323]">
                                Insights que conectam<br className="hidden lg:block" /> direito, tecnologia e inovação
                            </h1>
                            <p className="font-motiva text-[18px] md:text-[20px] leading-[1.5] text-[#232323] max-w-[625px]">
                                Nesta seção reunimos artigos jurídicos, análises e conteúdos sobre Direito Regulatório, Advocacia Empresarial, Direito Digital e Tecnologia. Nosso objetivo é compartilhar conhecimento aplicado para transformar desafios jurídicos em oportunidades de crescimento.<br /><br />
                                Aqui você encontra conteúdo exclusivo produzido por advogados especializados em consultoria jurídica, Direito Empresarial e soluções regulatórias.
                            </p>
                        </div>
                        
                        {/* Right Column / Image */}
                        <div className="lg:col-span-5 w-full flex lg:justify-end">
                            <div className="w-full lg:max-w-[584px] aspect-[584/488] bg-[#d9d9d9] relative overflow-hidden shadow-sm">
                                <Image src="/assets/corporate-space.png" alt="Insights e artigos" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <BlogTabs posts={posts} categories={categories} />

            <Footer />
        </main>
    );
}
