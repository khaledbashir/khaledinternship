
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Sidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const sections = NAV_LINKS.map(link => {
            const id = link.href.substring(1);
            return document.getElementById(id);
        }).filter(el => el !== null) as HTMLElement[];

        if (sections.length === 0) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { 
                rootMargin: '-40% 0px -60% 0px', 
                threshold: 0 
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button (Hamburger) */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white/50 backdrop-blur-sm text-[#4A4441] shadow-md"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open navigation menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Sidebar Navigation */}
            <aside 
                className={`fixed top-0 left-0 h-full w-64 bg-[#4A4441] text-white z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
                aria-hidden={!isMobileMenuOpen && (typeof window !== 'undefined' && window.innerWidth < 768)}
            >
                <div className="p-8">
                    <a href="#home" onClick={handleLinkClick} className="block text-2xl font-bold mb-12" style={{
                        background: 'linear-gradient(90deg, #EAE5E2, #CBBFB8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Internship Report
                    </a>
                    <nav className="flex flex-col space-y-2">
                        {NAV_LINKS.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={handleLinkClick}
                                className={`block px-4 py-3 rounded-md text-lg transition-all duration-200 ${activeSection === link.href.substring(1) ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`}
                                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

             {/* Overlay for mobile menu */}
             {isMobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;