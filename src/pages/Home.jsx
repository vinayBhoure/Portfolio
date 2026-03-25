import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import SkillsGrid from '../components/SkillsGrid';
import { ProjectCard, BuiltList } from '../components/Projects';
import GitHubActivity from '../components/GitHubActivity';
import { BlogPreview } from '../components/Blog';
import Contact from '../components/Contact';
import { projectsData } from '../data/projectsData';

const Home = () => {
    const featuredProjects = projectsData.filter(p => p.category === 'Featured');

    return (
        <>
            <Hero />
            <Experience />
            <SkillsGrid />

            <section id="projects" className="py-16">
                <h1 className="text-5xl font-bold mb-2">Projects</h1>
                <h2 className="text-xl text-muted mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                <BuiltList />
            </section>

            <GitHubActivity />
            <BlogPreview />
            <Contact />
        </>
    );
};

export default Home;
