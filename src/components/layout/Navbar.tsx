'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { translations, Locale } from '@/constants/translations';

const Navbar = () => {
    const [locale, setLocale] = useState<Locale>('az');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const t = translations[locale].nav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLocale = () => {
        setLocale((prev) => (prev === 'az' ? 'ru' : 'az'));
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-leather-cream/90 backdrop-blur-md py-4 shadow-subtle' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-leather-pitch uppercase">
                    Leather<span className="text-leather-tan">Craft</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-12">
                    {Object.entries(t).map(([key, label]) => (
                        <Link
                            key={key}
                            href={`#${key}`}
                            className="text-sm font-medium tracking-widest uppercase hover:text-leather-tan transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-6">
                    <button
                        onClick={toggleLocale}
                        className="text-xs font-bold tracking-tighter uppercase border border-leather-pitch/20 px-2 py-1 rounded hover:bg-leather-pitch hover:text-leather-cream transition-all"
                    >
                        {locale === 'az' ? 'RU' : 'AZ'}
                    </button>

                    <div className="hidden md:block text-sm font-medium tracking-widest">
                        {translations[locale].currency}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-leather-pitch focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-leather-cream border-t border-leather-pitch/10 flex flex-col items-center py-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                    {Object.entries(t).map(([key, label]) => (
                        <Link
                            key={key}
                            href={`#${key}`}
                            className="text-lg font-serif tracking-widest uppercase"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="pt-4 text-sm font-medium tracking-widest border-t border-leather-pitch/10 w-1/2 text-center">
                        {translations[locale].currency}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
