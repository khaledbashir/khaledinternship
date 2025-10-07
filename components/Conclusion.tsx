
import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Conclusion: React.FC = () => {
    return (
        <section id="conclusion" className="py-20 md:py-32 bg-[#4A4441] text-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <ScrollAnimator>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Conclusion & Skills Gained</h2>
                            <p className="leading-loose text-gray-300">
                                This internship was a transformative experience that bridged the gap between academic theory and professional practice. It significantly enhanced key soft skills like communication, teamwork, and problem-solving while instilling a strong sense of responsibility and time management. I gained deep insights into large-scale logistics operations, project management, and professional standards, leaving me with improved technical abilities and a clear vision for a future career in the industry.
                            </p>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Acknowledgements</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>I extend my heartfelt thanks to Dr. Mohammed Abu Shams for his invaluable guidance and unwavering support throughout my internship.</p>
                                <p>My sincere appreciation goes to my supervisors and the entire team at Aqaba Logistics Village for their mentorship and for creating a supportive, professional learning environment.</p>
                                <p>Finally, I am grateful to my fellow student interns for their cooperation and teamwork, which made this experience both productive and memorable.</p>
                            </div>
                        </div>
                    </ScrollAnimator>
                </div>
                <ScrollAnimator>
                    <div className="text-center mt-20 md:mt-32 pt-10 border-t border-gray-500">
                        <h3 className="text-4xl font-bold text-white">THANK YOU</h3>
                    </div>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default Conclusion;
