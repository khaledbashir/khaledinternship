
import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const stats = [
    { value: '470,000 m²', label: 'Facility Size' },
    { value: 'Global Standards', label: 'Managed by APM Terminals' },
    { value: 'On-Site', label: 'Customs Facilities' },
];

const CompanyOverview: React.FC = () => {
    return (
        <section id="overview" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Company Overview</h2>
                            <h3 className="text-2xl font-semibold text-[#4A4441] mb-4">Aqaba Logistics Village (ALV)</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Strategically located in the Aqaba Special Economic Zone, ALV is a world-class logistics hub managed by APM Terminals and the Kawar Group. Situated next to the Aqaba Container Terminal, it offers comprehensive services including storage, distribution, customs clearance, and value-added operations. Its modern facilities are central to facilitating smooth and efficient regional trade.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t pt-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-3xl font-bold text-[#4A4441]">{stat.value}</p>
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg shadow-xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1586528116311-069241512875?q=80&w=800&auto=format&fit=crop" alt="Aqaba Logistics Village Aerial View" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <span className="absolute bottom-5 left-5 text-white text-xl font-bold">World-Class Logistics Hub</span>
                        </div>
                    </div>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default CompanyOverview;
