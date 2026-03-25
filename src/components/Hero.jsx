import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { heroData } from '../data/heroData';

const Hero = () => {
    return (
        <section className="pt-24 pb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] rounded-full text-xs font-medium text-accent mb-6 animate-fade-in">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_var(--accent)] animate-pulse"></span>
                {heroData.status}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-4 animate-fade-in delay-1">
                Hi, I'm {heroData.name}.
            </h1>

            <p className="text-2xl text-muted mb-6 animate-fade-in delay-2">
                {heroData.title}.
            </p>

            <p className="max-w-[600px] text-lg text-muted mb-10 leading-relaxed animate-fade-in delay-3">
                Crafting <span className="glossy-keyword">scalable architectures</span> and <span className="glossy-keyword">high-performance interfaces</span> from pixel to production.
            </p>

            <div className="flex gap-4 mb-12 animate-fade-in delay-4">
                <a href="#contact" className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:translate-y-[-2px] hover:opacity-90 transition-all">
                    Get in Touch
                </a>
                <a href={heroData.resumeUrl} className="px-6 py-3 border border-border text-fg rounded-lg font-medium inline-flex items-center gap-2 hover:translate-y-[-2px] hover:opacity-90 transition-all">
                    <FileText size={18} /> View Resume
                </a>
            </div>

            <div className="flex gap-6 animate-fade-in delay-4">
                <a href={heroData.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg transition-colors" aria-label="GitHub">
                    <Github size={24} />
                </a>
                <a href={heroData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                </a>
                <a href={heroData.socials.mail} className="text-muted hover:text-fg transition-colors" aria-label="Email">
                    <Mail size={24} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
