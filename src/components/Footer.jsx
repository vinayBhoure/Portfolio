import React from 'react';
import { heroData } from '../data/heroData';
import { aboutData } from '../data/aboutData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 border-t border-border text-center">
            <div className="container ">
                <p className="italic text-muted max-w-[600px] mx-auto mb-8 text-lg font-serif">
                    {aboutData.footerQuote}
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted gap-4">
                    <p>Developed by {heroData.name} © {currentYear}</p>
                    <p>
                        Visitor count: You are the <span className="font-mono text-fg">{aboutData.visitorCount}</span>th visitor
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
