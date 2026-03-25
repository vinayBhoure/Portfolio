import React from 'react';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const Experience = () => {
    const workExperience = experienceData.filter(exp => exp.type === 'Work');

    return (
        <section id="experience" className="py-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Briefcase size={24} /> Experience
            </h2>

            <div className="relative pl-12 flex flex-col">
                {workExperience.map((exp, index) => (
                    <div key={index} className="relative pb-12 last:pb-0 group">
                        {/* Timeline Dot */}
                        <div className="absolute left-[-2.05rem] top-[0.4rem] w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_12px_var(--accent)] z-10 transition-transform group-hover:scale-125"></div>

                        {/* Timeline Line */}
                        {index !== workExperience.length - 1 && (
                            <div className="absolute left-[-1.8rem] top-2 bottom-[-3rem] w-[1px] bg-border z-0"></div>
                        )}

                        <div className="flex flex-col md:flex-row justify-between items-baseline gap-1 mb-2">
                            <h3 className="text-xl font-bold text-fg">{exp.company}</h3>
                            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 text-right md:text-left">
                                <span className="text-[0.9375rem] font-medium text-accent">{exp.role}</span>
                                <span className="text-xs font-mono text-muted uppercase tracking-wider">{exp.period}</span>
                            </div>
                        </div>

                        <div className="text-[0.9375rem] text-muted leading-relaxed">
                            <ul className="flex flex-col gap-2">
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx} className="relative pl-5 before:content-['→'] before:absolute before:left-0 before:text-accent">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
