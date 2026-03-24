import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { ProjectCard } from '../components/Projects';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Frontend', 'Full Stack', 'Backend', 'Open Source'];

    const filteredProjects = projectsData.filter(p => {
        if (p.category === 'Featured' || p.category === 'Built') return false;
        if (filter === 'All') return true;
        return p.category === filter;
    });

    return (
        <>
            <header className="pt-24 pb-12">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">All Projects</h1>
                <p className="text-xl text-muted animate-fade-in delay-1">Things I've designed, built and shipped.</p>
            </header>

            <div className="flex gap-4 mb-12 overflow-x-auto pb-2 animate-fade-in delay-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-lg border text-sm whitespace-nowrap transition-all ${filter === cat
                            ? 'bg-fg text-bg border-fg'
                            : 'border-border text-muted hover:border-fg hover:text-fg'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="mt-24 py-16 text-center border-t border-border">
                <p className="text-muted mb-6">More projects on github.com/vinayBhoure</p>
                <a
                    href="https://github.com/vinayBhoure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-border text-fg rounded-lg font-medium inline-flex items-center gap-2 hover:translate-y-[-2px] hover:opacity-90 transition-all"
                >
                    <Github size={18} /> Follow on GitHub
                </a>
            </div>
        </>
    );
};

export default Projects;
