'use client';
export const runtime = 'edge';
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Locale, translations } from '@/constants/translations';

const ProductPage = ({ params }: { params: { id: string } }) => {
    const [locale, setLocale] = useState<Locale>('az');
    const t = translations[locale].products;

    // Mock data - in a real app this would be fetched based on params.id
    const product = {
        name: locale === 'az' ? 'Minimalist Bifold Wallet' : 'Минималистичный Кошелек',
        price: '85',
        image: '/images/wallet.png',
        description: locale === 'az'
            ? 'Yüksək keyfiyyətli həqiqi dəridən əllə hazırlanmış bu cüzdan, illər boyu sizə xidmət edəcək. Minimalist dizaynı sayəsində həm klassik, həm də gündəlik geyim tərzi ilə mükəmməl uyğunlaşır.'
            : 'Этот кошелек ручной работы из высококачественной натуральной кожи прослужит вам долгие годы. Благодаря минималистичному дизайну он идеально сочетается как с классическим, так и с повседневным стилем одежды.',
        features: locale === 'az'
            ? ['6 kart bölməsi', 'Pul bölməsi', '100% Həqiqi Dəri', 'Əl işi']
            : ['6 отделений для карт', 'Отделение для купюр', '100% Натуральная кожа', 'Ручная работа'],
    };

    const whatsappLink = `https://wa.me/994501234567?text=${encodeURIComponent(
        `Salam, mən "${product.name}" məhsulu ilə maraqlanıram.`
    )}`;

    return (
        <main className="bg-leather-cream min-h-screen">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Images */}
                    <div className="space-y-6">
                        <div className="relative aspect-square rounded-luxury overflow-hidden shadow-subtle group">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-square relative rounded-luxury overflow-hidden border border-leather-pitch/10 cursor-pointer hover:border-leather-tan">
                                    <Image src={product.image} alt="Thumbnail" fill sizes="100px" className="object-cover opacity-60 hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-12 py-6">
                        <div>
                            <span className="text-leather-tan text-xs font-bold tracking-[0.3em] uppercase">Premium Wallets</span>
                            <h1 className="text-5xl font-serif text-leather-pitch mt-4">{product.name}</h1>
                            <p className="text-3xl font-light text-leather-pitch/70 mt-6">{product.price} {translations[locale].currency}</p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg font-light leading-relaxed text-leather-pitch/80">
                                {product.description}
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-leather-pitch">
                                        <span className="w-1.5 h-1.5 rounded-full bg-leather-tan" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-10 border-t border-leather-pitch/10">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-5 bg-leather-pitch text-white text-center font-bold tracking-widest uppercase rounded-luxury hover:bg-leather-tan transition-all shadow-xl"
                            >
                                {t.orderWhatsApp}
                            </a>
                            <p className="text-center text-[10px] tracking-widest text-leather-pitch/40 uppercase mt-4">
                                Personal craftsman connection via WhatsApp
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer locale={locale} />
        </main>
    );
};

export default ProductPage;
