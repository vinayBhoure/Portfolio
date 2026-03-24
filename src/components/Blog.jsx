import React from 'react';
import { PenTool, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const BlogPreview = () => {
    const latestBlog = blogData[0];

    return (
        <section id="blog-preview" className="py-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                    <PenTool size={24} /> Latest from Blog
                </h2>
                <Link to="/blog" className="text-accent text-[0.875rem] flex items-center gap-1 hover:opacity-80 transition-opacity">
                    View all <ArrowRight size={14} />
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-4 border-b border-border animate-fade-in">
                    <div className="flex flex-col gap-1">
                        <span className="text-[0.75rem] text-muted font-mono">{latestBlog.date}</span>
                        <h4 className="font-medium text-lg">{latestBlog.title}</h4>
                    </div>
                    <Link to="/blog" className="text-accent hover:text-fg transition-colors">
                        <ArrowUpRight size={24} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export const BlogRow = ({ blog }) => (
    <div className="flex justify-between items-start py-8 border-b border-border animate-fade-in">
        <div className="max-w-[80%] flex flex-col gap-1">
            <div className="flex gap-4 mb-2">
                <span className="text-[0.75rem] text-muted font-mono">{blog.date}</span>
                <span className="text-[0.75rem] text-muted font-mono">•</span>
                <span className="text-[0.75rem] text-muted font-mono">{blog.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-muted mb-4 leading-relaxed">{blog.description}</p>
            <div className="flex gap-2">
                {blog.tags.map((tag, idx) => (
                    <span key={idx} className="text-[0.7rem] font-bold px-2 py-0.5 bg-[rgba(255,255,255,0.05)] rounded text-muted uppercase">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-fg transition-colors">
            <ArrowUpRight size={32} />
        </a>
    </div>
);
