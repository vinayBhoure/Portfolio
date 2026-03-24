import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { heroData } from '../data/heroData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/#contact', isAccent: true },
    ];

    const isActive = (path) => {
        if (path.startsWith('/#')) return false;
        return location.pathname === path;
    };

    return (
        <nav className="sticky top-0 z-100 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-border h-16 flex items-center">
            <div className="container flex justify-between items-center w-full relative">
                <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    {heroData.shortName}
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${link.isAccent
                                        ? 'text-accent hover:opacity-80'
                                        : isActive(link.path)
                                            ? 'text-fg'
                                            : 'text-muted hover:text-fg'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 text-fg"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-bg border-b border-border p-8 flex flex-col gap-6 md:hidden animate-fade-in shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium ${link.isAccent
                                        ? 'text-accent'
                                        : isActive(link.path)
                                            ? 'text-fg'
                                            : 'text-muted'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
