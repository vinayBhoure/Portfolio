import React, { useState } from 'react';
import { BlogRow } from '../components/Blog';
import { blogData } from '../data/blogData';

const Blog = () => {
    const [filter, setFilter] = useState('All');

    const tags = ['All', 'Engineering', 'Web', 'Career'];

    const filteredBlogs = blogData.filter(b => {
        if (filter === 'All') return true;
        return b.tags.includes(filter.toUpperCase());
    });

    return (
        <>
            <header className="pt-24 pb-12">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">Blog</h1>
                <p className="text-xl text-muted animate-fade-in delay-1">Thoughts on engineering, systems, and the web.</p>
            </header>

            <div className="flex gap-4 mb-12 overflow-x-auto pb-2 animate-fade-in delay-2">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-2 rounded-lg border text-sm whitespace-nowrap transition-all ${filter === tag
                            ? 'bg-fg text-bg border-fg'
                            : 'border-border text-muted hover:border-fg hover:text-fg'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="flex flex-col">
                {filteredBlogs.map((blog, index) => (
                    <BlogRow key={index} blog={blog} />
                ))}
            </div>

            <section id="subscribe" className="my-24 bg-card-bg border border-border rounded-xl p-12 text-center animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Subscribe for updates</h2>
                <p className="text-muted mb-8 max-w-[500px] mx-auto">Get notified when I publish new articles about web development and system design.</p>
                <form className="flex flex-col md:flex-row gap-2 max-w-[400px] mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="flex-grow px-4 py-3 rounded-lg border border-border bg-bg text-fg focus:outline-none focus:border-accent transition-colors"
                    />
                    <button type="submit" className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                        Join Waitlist
                    </button>
                </form>
            </section>
        </>
    );
};

export default Blog;
