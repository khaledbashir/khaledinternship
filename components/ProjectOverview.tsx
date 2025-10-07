
import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const benefits = [
    {
        title: "Faster Loading",
        description: "Pre-arranging goods for trucks speeds up vehicle turnaround time.",
        icon: "⏱️"
    },
    {
        title: "Quality Control",
        description: "Allows for checking damages, missing items, and documentation mismatches.",
        icon: "✔️"
    },
    {
        title: "Safety & Organization",
        description: "Reduces clutter and creates safe zones for forklifts and workers.",
        icon: "👷"
    },
];

const ProjectOverview: React.FC = () => {
    return (
        <section id="project" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <ScrollAnimator className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text">Project: Designing a Staging Area</h2>
                    <p className="text-xl text-gray-500 mt-2">– Enhancing Warehouse Efficiency –</p>
                </ScrollAnimator>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollAnimator>
                         <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden p-4">
                            <img src="https://images.unsplash.com/photo-1516937998395-69974878592f?q=80&w=1200&auto=format&fit=crop" alt="Warehouse Diagram" className="w-full h-auto object-cover rounded"/>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-[#4A4441]">The Goal</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                To design and implement a dedicated, clearly marked staging area for the DC2 Warehouse to resolve operational bottlenecks, reduce congestion, and improve overall safety and workflow.
                            </p>

                             <h3 className="text-2xl font-bold mb-4 text-[#4A4441]">Key Benefits</h3>
                             <div className="space-y-4">
                                {benefits.map((benefit) => (
                                     <div key={benefit.title} className="flex items-start">
                                        <div className="text-2xl mr-4">{benefit.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimator>
                </div>
                
                 <ScrollAnimator>
                    <div className="mt-20 text-center bg-[#F8F7F5] p-8 rounded-lg border">
                         <h3 className="text-2xl font-bold mb-3 text-[#4A4441]">Project Result</h3>
                         <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A formal staging area was successfully designed, improving the organization and flow of goods. This enhanced space utilization and led to a reported 15% reduction in truck loading times and fewer order fulfillment errors.
                         </p>
                    </div>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default ProjectOverview;
