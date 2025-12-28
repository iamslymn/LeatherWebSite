'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { Locale } from '@/constants/translations';

const CollectionPage = () => {
    const [locale, setLocale] = useState<Locale>('az');

    const products = [
        {
            id: '1',
            name: locale === 'az' ? 'Minimalist Bifold Wallet' : 'Минималистичный Кошелек',
            price: '85',
            image: '/images/wallet.png',
            category: locale === 'az' ? 'Wallets' : 'Кошельки',
        },
        // Add more if needed
    ];

    return (
        <main className="bg-leather-cream min-h-screen">
            <Navbar />

            {/* Magazine Header */}
            <header className="pt-48 pb-20 px-6 container mx-auto text-center">
                <div className="inline-block border-y border-leather-pitch/10 py-4 px-12 mb-8">
                    <span className="text-leather-tan text-xs font-bold tracking-[0.5em] uppercase">Volume. 01</span>
                </div>
                <h1 className="text-6xl md:text-9xl font-serif text-leather-pitch lowercase tracking-tighter">
                    Wallets <span className="text-leather-tan font-light">&</span> Accessories
                </h1>
                <p className="mt-12 text-xl font-light text-leather-pitch/60 max-w-2xl mx-auto italic leading-relaxed">
                    "Design is a way of responding to life." Exploring the intersection of utility and timeless craft in our latest creations.
                </p>
            </header>

            {/* Grid */}
            <ProductGrid
                title=""
                products={products}
                locale={locale}
            />

            <Footer locale={locale} />
        </main>
    );
};

export default CollectionPage;
