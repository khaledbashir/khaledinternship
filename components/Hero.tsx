
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen min-h-[700px] flex items-center justify-center relative text-white bg-gray-800">
            <div 
                className="absolute inset-0 bg-cover bg-center z-0 opacity-40" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613622432571-3372b44f5223?q=80&w=1920&auto=format&fit=crop')" }}>
            </div>
            <div className="relative z-10 text-center p-8">
                <div className="bg-black/40 backdrop-blur-sm p-10 rounded-lg shadow-2xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-4">
                        Internship Report
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest text-gray-200">
                        FINAL PRESENTATION
                    </p>
                    <div className="mt-8 border-t border-white/30 w-1/4 mx-auto"></div>
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg font-semibold">
                        <span>Aqaba Logistics Village</span>
                        <span className="hidden md:inline">|</span>
                        <span>German Jordanian University</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
