import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
    return (
        <div className="bg-card-bg border border-border rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:border-[rgba(255,255,255,0.2)] flex flex-col relative group">
            <div className="absolute top-4 right-4 bg-[rgba(255,255,255,0.5)] text-muted px-3 py-1 rounded-full text-[0.7rem] font-bold border border-border backdrop-blur-sm z-10">
                {project.category}
            </div>

            <img src={project.image} alt={project.title} className="w-full aspect-[21/9] object-cover border-b border-border group-hover:scale-105 transition-transform duration-500" />

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-[1.125rem] font-semibold mb-2">{project.title}</h3>
                <p className="text-[0.875rem] text-muted mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[0.7rem] font-bold px-2 py-0.5 bg-[rgba(255,255,255,0.05)] rounded text-muted uppercase">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[0.875rem] font-medium text-accent flex items-center gap-1.5 hover:text-fg transition-colors">
                            <Github size={16} /> GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[0.875rem] font-medium text-accent flex items-center gap-1.5 hover:text-fg transition-colors">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export const BuiltList = () => {
    const builtProjects = projectsData.filter(p => p.category === 'Built');

    return (
        <div className="mt-16">
            <h3 className="text-lg font-semibold mb-8">Things I've Built</h3>
            <div className="flex flex-col gap-4">
                {builtProjects.map((project, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-border group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-mono text-muted">{project.tags.join(' • ')}</span>
                            <h4 className="font-semibold">{project.title}</h4>
                            <p className="text-muted text-[0.875rem]">{project.description}</p>
                        </div>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-fg transition-colors">
                            <ArrowUpRight size={20} />
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to="/projects" className="px-6 py-3 border border-border text-fg rounded-lg font-medium inline-flex items-center gap-2 hover:translate-y-[-2px] hover:opacity-90 transition-all">
                    View All Projects <ArrowUpRight size={18} />
                </Link>
            </div>
        </div>
    );
};
