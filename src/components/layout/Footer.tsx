'use client';

import React from 'react';
import { Locale, translations } from '@/constants/translations';

const Footer = ({ locale = 'az' }: { locale?: Locale }) => {
    return (
        <footer className="bg-leather-pitch text-leather-cream py-20 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-leather-cream/10 pb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-bold tracking-widest uppercase">
                            Leather<span className="text-leather-tan">Craft</span>
                        </h3>
                        <p className="text-sm font-light leading-relaxed text-leather-cream/70 max-w-xs">
                            Handcrafting timeless leather pieces in the heart of Azerbaijan. Quality, tradition, and elegance in every stitch.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-leather-tan">Navigation</h4>
                        <ul className="space-y-2 text-sm font-light">
                            <li><a href="#" className="hover:text-leather-tan transition-colors">{translations[locale].nav.shop}</a></li>
                            <li><a href="#" className="hover:text-leather-tan transition-colors">{translations[locale].nav.collections}</a></li>
                            <li><a href="#" className="hover:text-leather-tan transition-colors">{translations[locale].nav.about}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-leather-tan">Contact</h4>
                        <ul className="space-y-2 text-sm font-light">
                            <li>Baku, Azerbaijan</li>
                            <li>+994 50 123 45 67</li>
                            <li>info@leathercraft.az</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-leather-tan">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 flex items-center justify-center border border-leather-cream/20 rounded-full hover:bg-leather-tan transition-all">Insta</a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center border border-leather-cream/20 rounded-full hover:bg-leather-tan transition-all">FB</a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-leather-cream/40">
                    <p>© 2024 LeatherCraft Azerbaijan. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Designed stay timeless</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
