"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ExternalLink, ArrowRight, Loader2 } from 'lucide-react';
// import Image from 'next/image';

interface MediumArticle {
    title: string;
    date: string;
    link: string;
    image: string;
    description: string;
    tags: string[];
}

const MediumArticles = () => {
    const [articles, setArticles] = useState<MediumArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://mediumpostsapi.vercel.app/api/lgarner_26737');
                if (!response.ok) throw new Error('Failed to fetch articles');
                const result = await response.json();
                if (result && result.dataMedium && Array.isArray(result.dataMedium)) {
                    setArticles(result.dataMedium.slice(0, 3));
                } else {
                    throw new Error('Unexpected API response format');
                }
            } catch (err) {
                console.error('Error fetching Medium articles:', err);
                setError('Failed to load articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <section id="articles" className="py-24 bg-white flex flex-col items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-[#007595] mb-4" />
                <p className="text-muted-foreground animate-pulse">Fetching latest stories...</p>
            </section>
        );
    }

    if (error || articles.length === 0) {
        return null; // Gracefully hide if fails
    }

    return (
        <section id="articles" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-clashDisplay mb-6"
                    >
                        Latest from the Blog
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Insights, strategies, and stories to help you live life in the black.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <CardHeader className="space-y-2 pt-6">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {article.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-[#007595] bg-[#007595]/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-[#007595] transition-colors">
                                        {article.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground line-clamp-3 text-sm">
                                        {article.description}
                                    </p>
                                </CardContent>
                                <CardFooter className="mt-auto pt-4 border-t border-gray-100/50">
                                    <Button variant="ghost" className="w-full text-[#d100c8] hover:text-[#d100c8] hover:bg-[#d100c8]/5 font-semibold group/btn" asChild>
                                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                                            Read Full Article
                                            <ArrowRight className="h-4 w-4 transform transition-transform group-hover/btn:translate-x-1" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 py-6 border-[#007595] text-[#007595] hover:bg-[#007595] hover:text-white transition-all transform hover:scale-105"
                        asChild
                    >
                        <a href="https://medium.com/@lgarner_26737" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            View All Articles on Medium
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default MediumArticles;
