"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { posts as staticPosts } from "@/data/posts";

export default function LatestPosts() {
    const { t, language } = useLanguage();
    const [posts, setPosts] = useState<any[]>(staticPosts);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            try {
                const res = await fetch(`/api/posts?sort=-date&limit=10&page=${page}&depth=1&locale=${language}&fallback-locale=pt`, { cache: 'no-store' });
                const data = await res.json();
                if (data && data.docs && data.docs.length > 0) {
                    if (page === 1) {
                        setPosts(data.docs);
                    } else {
                        setPosts(prev => {
                            const newDocs = data.docs.filter((d: any) => !prev.some(p => p.slug === d.slug));
                            return [...prev, ...newDocs];
                        });
                    }
                    setHasNextPage(data.hasNextPage);
                } else if (page === 1) {
                    setPosts(staticPosts);
                    setHasNextPage(false);
                }
            } catch (err) {
                console.error("Erro ao buscar posts:", err);
                if (page === 1) setPosts(staticPosts);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleLoadMore = () => {
        if (!expanded) {
            setExpanded(true);
        } else if (hasNextPage) {
            setPage(prev => prev + 1);
        }
    };

    const visiblePosts = expanded ? posts : posts.slice(0, 3);

    return (
        <>
            <div className="flex flex-col gap-4 lg:gap-6 mb-16 max-w-[1200px] mx-auto w-full">
                {visiblePosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row w-full bg-[#e2e2e2] cursor-pointer hover:bg-[#d5d5d5] transition-colors">
                        <div className="w-full md:w-[300px] lg:w-[450px] aspect-[16/9] md:aspect-auto md:h-[220px] lg:h-[280px] bg-[#d9d9d9] overflow-hidden flex-shrink-0 relative">
                            {post.image && typeof post.image === 'object' && post.image.url ? (
                                <Image src={post.image.url} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            ) : post.image && typeof post.image === 'string' ? (
                                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-center p-8 lg:p-12 flex-1 relative">
                            <h3 className="font-handel text-[24px] lg:text-[33.17px] leading-[1.1] mb-4 text-gray-dark">{post.title}</h3>
                            <p className="font-motiva text-[16px] lg:text-[18px] leading-[1.5] text-gray-600 mb-6 max-w-[600px] line-clamp-3">
                                {post.excerpt}
                            </p>
                            <span className="font-motiva font-bold uppercase text-[14px] text-gray-dark group-hover:text-primary transition-colors block border-t-[2px] border-black pt-4 w-fit">
                                {t.publications.read_more}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {(!expanded && posts.length > 3) || (expanded && hasNextPage) ? (
                <div className="flex justify-center lg:mt-[60px] relative w-full pt-10">
                    <button 
                        onClick={handleLoadMore} 
                        disabled={loading}
                        className="font-handel text-[24px] lg:text-[35px] text-gray-dark hover:text-primary transition-colors inline-block text-center relative z-10 bg-overlay px-8 cursor-pointer disabled:opacity-50"
                    >
                        {loading ? "Carregando..." : t.publications.see_all}
                    </button>
                </div>
            ) : null}
        </>
    );
}
