'use client';

import React from 'react';
import Image from 'next/image';
import { translations, Locale } from '@/constants/translations';

const Hero = ({ locale = 'az' }: { locale?: Locale }) => {
    const t = translations[locale].hero;

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Leather"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-75 scale-105 animate-slow-zoom"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-leather-pitch/40 via-transparent to-leather-cream/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
                    {t.title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/90 mb-10 tracking-wide">
                    {t.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="px-10 py-4 bg-white text-leather-pitch text-sm font-bold tracking-widest uppercase hover:bg-leather-tan hover:text-white transition-all duration-300 rounded-luxury shadow-xl">
                        {t.cta}
                    </button>
                    <button className="px-10 py-4 bg-transparent border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-leather-pitch transition-all duration-300 rounded-luxury">
                        {translations[locale].nav.collections}
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
