
import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const tasks = [
    {
        title: "Cross-Docking Operations",
        description: "Supervised the rapid transfer of goods from inbound to outbound trucks, minimizing storage time and accelerating the supply chain.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4A4441]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        )
    },
    {
        title: "LCL Export",
        description: "Managed Less-than-Container-Load shipments, including customs verification and using RF devices for real-time inventory tracking and processing.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4A4441]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
            </svg>
        )
    },
    {
        title: "DC Storage",
        description: "Handled distribution center storage, barcoding inbound goods for tracking and verifying outbound shipments against checklists for accuracy.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4A4441]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        )
    },
    {
        title: "Open Yard Operations",
        description: "Verified vehicle insurance, inspected new zero-mileage cars for transit damages, and confirmed all items were present in new vehicles.",
        icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4A4441]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    }
];

const DailyTasks: React.FC = () => {
    return (
        <section id="tasks" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                 <ScrollAnimator className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">Daily Tasks and Activities</h2>
                </ScrollAnimator>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tasks.map((task, index) => (
                        <ScrollAnimator key={index} className="flex">
                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full border-t-4 border-[#CBBFB8]">
                                <div className="mb-4">{task.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-[#4A4441]">{task.title}</h3>
                                <p className="text-gray-600">{task.description}</p>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DailyTasks;
