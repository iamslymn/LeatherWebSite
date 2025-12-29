'use client';
export const runtime = 'edge';
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import Footer from '@/components/layout/Footer';
import { Locale, translations } from '@/constants/translations';

const products = [
  {
    id: '1',
    name: 'Minimalist Bifold Wallet',
    nameRu: 'Минималистичный Кошелек',
    price: '85',
    image: '/images/wallet.png',
    category: 'Wallets',
    categoryRu: 'Кошельки',
  },
  {
    id: '2',
    name: 'Classic Leather Belt',
    nameRu: 'Классический Ремень',
    price: '110',
    image: '/images/belt.png',
    category: 'Belts',
    categoryRu: 'Ремни',
  },
  {
    id: '3',
    name: 'Premium Gift Bundle',
    nameRu: 'Подарочный Набор Премиум',
    price: '240',
    image: '/images/bundle.png',
    category: 'Gift Sets',
    categoryRu: 'Наборы',
  }
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>('az');

  return (
    <main className="min-h-screen bg-leather-cream">
      <Navbar />
      <Hero locale={locale} />

      {/* Featured Collection */}
      <div id="shop">
        <ProductGrid
          title={translations[locale].products.featured}
          products={products.map(p => ({
            ...p,
            name: locale === 'az' ? p.name : p.nameRu,
            category: locale === 'az' ? p.category : p.categoryRu
          }))}
          locale={locale}
        />
      </div>

      {/* Editorial Section */}
      <section className="py-32 bg-leather-pitch text-leather-cream overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-reveal">
            <span className="text-leather-tan text-xs font-bold tracking-[0.3em] uppercase">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Crafted for the <br /> Distinguished.</h2>
            <p className="text-xl font-light text-leather-cream/70 leading-relaxed max-w-md">
              Every piece is hand-stitched with precision using traditional methods passed down through generations.
              We use 100% full-grain leather that ages beautifully, telling your story over time.
            </p>
            <button className="text-sm font-bold tracking-widest uppercase border-b-2 border-leather-tan pb-2 hover:text-leather-tan transition-colors">
              Read Our Story
            </button>
          </div>
          <div className="relative aspect-square md:aspect-[3/4] rounded-luxury overflow-hidden shadow-2xl skew-y-3">
            <img src="/images/hero.png" alt="Crafting" className="object-cover w-full h-full brightness-90 grayscale-[30%]" />
          </div>
        </div>
      </section>

      {/* Trending / New Arrivals */}
      <div id="collections">
        <ProductGrid
          title={translations[locale].products.trending}
          products={products.slice(0, 2).map(p => ({
            ...p,
            name: locale === 'az' ? p.name : p.nameRu,
            category: locale === 'az' ? p.category : p.categoryRu
          }))}
          locale={locale}
        />
      </div>

      <Footer locale={locale} />
    </main>
  );
}
