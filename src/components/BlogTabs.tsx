"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BlogTabsProps {
    posts: any[];
    categories: string[];
}

export default function BlogTabs({ posts, categories }: BlogTabsProps) {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<string>("Todos");

    // Filtrar posts baseado na aba ativa
    const filteredPosts = posts.filter(post => {
        if (activeTab === "Todos") return true;
        
        // Categoria no payload pode ser array de strings ou string
        if (post.category && Array.isArray(post.category)) {
            return post.category.includes(activeTab);
        }
        return post.category === activeTab;
    });

    return (
        <div className="w-full relative bg-[#F5F2E9]">
            {/* Category Tabs */}
            <div className="max-w-[1512px] mx-auto px-6 lg:px-20 mb-16 overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 md:gap-8 lg:gap-12 min-w-max border-t border-black pt-4 relative">
                    {categories.map((cat) => {
                        const isActive = activeTab === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`relative group px-1 flex flex-col items-center justify-start text-left cursor-pointer transition-colors pt-2`}
                            >
                                {/* Yellow active overlay */}
                                {isActive && (
                                    <div className="absolute top-[-2px] left-0 w-full h-[35px] md:h-[50px] bg-accent mix-blend-multiply pointer-events-none" />
                                )}
                                <span className={`font-handel text-[18px] md:text-[23.6px] leading-[1.1] z-10 ${isActive ? 'text-black' : 'text-gray-dark group-hover:text-primary transition-colors'}`}>
                                    {cat.toLowerCase()}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Posts List Section - Inspired strictly by LatestPosts layout */}
            <div className="w-full relative flex flex-col bg-[#F5F2E9]">
                <div className="flex flex-col gap-4 lg:gap-6 mb-16 max-w-[1512px] mx-auto w-full px-6 lg:px-20">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row w-full bg-[#e2e2e2] cursor-pointer hover:bg-[#d5d5d5] transition-colors">
                                <div className="w-full md:w-[300px] lg:w-[450px] aspect-[16/9] md:aspect-auto md:h-[220px] lg:h-[280px] bg-[#d9d9d9] overflow-hidden flex-shrink-0 relative">
                                    {post.image && typeof post.image === 'object' && post.image.url ? (
                                        <Image src={post.image.url} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    ) : post.image && typeof post.image === 'string' ? (
                                        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    ) : null}
                                </div>
                                <div className="flex flex-col justify-center p-8 lg:p-12 flex-1 relative">
                                    <div className="flex flex-wrap items-center gap-2 md:gap-4 font-motiva text-xs md:text-sm lg:text-[15px] font-bold uppercase tracking-widest mb-4">
                                        <span className="text-black">
                                            {post.category && post.category.length > 0 ? (Array.isArray(post.category) ? post.category[0] : post.category) : 'Artigo'}
                                        </span>
                                        {post.date && (
                                            <>
                                                <span className="text-foreground/40 hidden md:block">•</span>
                                                <span className="text-foreground/40">
                                                    {new Date(post.date).toLocaleDateString("pt-BR", { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="font-handel text-[24px] lg:text-[33.17px] leading-[1.1] mb-4 text-gray-dark group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="font-motiva text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 mb-6 max-w-[600px] line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <span className="font-motiva font-bold uppercase text-[14px] text-gray-dark group-hover:text-primary transition-colors block border-t-[2px] border-black pt-4 w-fit">
                                        Leia mais
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="py-20 text-center text-gray-500 font-motiva text-lg">
                            Nenhum post encontrado nesta categoria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
