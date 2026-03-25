import React from 'react';
import { Code2 } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const SkillsGrid = () => {
    return (
        <section id="skills" className="py-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Code2 size={24} /> Skills
            </h2>

            <div className="flex flex-wrap gap-3">
                {skillsData.map((skill, index) => (
                    <span
                        key={index}
                        className="px-5 py-2.5 bg-card-bg border border-border rounded-full text-sm text-muted relative overflow-hidden group hover:text-fg transition-colors animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {skill}
                        {/* Shimmer effect */}
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_55%,transparent_100%)] rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000"></div>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
