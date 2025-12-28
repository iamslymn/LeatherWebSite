'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/constants/translations';

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
    locale: Locale;
}

const ProductCard = ({ name, price, image, category, locale }: ProductCardProps) => {
    const t = translations[locale].products;

    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-luxury bg-white shadow-subtle mb-6">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-leather-pitch/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-leather-pitch px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-luxury transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                        {t.orderWhatsApp}
                    </button>
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-leather-tan font-bold">
                    {category}
                </p>
                <h3 className="text-xl font-serif text-leather-pitch group-hover:text-leather-tan transition-colors">
                    {name}
                </h3>
                <p className="text-sm font-medium text-leather-pitch/70 italic">
                    {price} {translations[locale].currency}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
