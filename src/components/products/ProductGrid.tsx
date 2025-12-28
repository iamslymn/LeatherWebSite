'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { Locale, translations } from '@/constants/translations';

interface ProductGridProps {
    title: string;
    products: any[];
    locale: Locale;
}

const ProductGrid = ({ title, products, locale }: ProductGridProps) => {
    return (
        <section className="py-24 px-6 md:px-12 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-leather-pitch/10 pb-6">
                <h2 className="text-4xl md:text-5xl font-serif text-leather-pitch">{title}</h2>
                <button className="text-sm font-bold tracking-widest uppercase group flex items-center gap-2 mt-4 md:mt-0">
                    {translations[locale].nav.shop}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} locale={locale} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
