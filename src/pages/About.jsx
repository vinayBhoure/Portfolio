import React from 'react';
import { Briefcase, GraduationCap, Award, Twitter } from 'lucide-react';
import { aboutData } from '../data/aboutData';
import { experienceData } from '../data/experienceData';
import { heroData } from '../data/heroData';

const TimelineSection = ({ title, icon: Icon, items }) => (
    <div className="flex flex-col gap-6">
        <h3 className="text-[0.75rem] uppercase tracking-[0.1em] text-muted flex items-center gap-2 before:content-[''] after:content-[''] after:flex-grow after:h-[1px] after:bg-border">
            <Icon size={14} /> {title}
        </h3>
        <div className="flex flex-col gap-6">
            {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 animate-fade-in">
                    <div className="font-mono text-sm text-muted">{item.period}</div>
                    <div>
                        <h4 className="font-bold text-fg mb-1">{item.company}</h4>
                        <p className="text-accent text-sm mb-2">{item.role}</p>
                        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const About = () => {
    const workItems = experienceData.filter(e => e.type === 'Work');
    const eduItems = experienceData.filter(e => e.type === 'Education');
    const certItems = experienceData.filter(e => e.type === 'Certification');

    return (
        <>
            <header className="pt-24 pb-12">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">About</h1>
                <p className="text-xl text-muted max-w-[700px] leading-relaxed animate-fade-in delay-1">
                    {aboutData.description}
                </p>
            </header>

            <section className="py-16 flex flex-col gap-12">
                <TimelineSection title="Work" icon={Briefcase} items={workItems} />
                <TimelineSection title="Education" icon={GraduationCap} items={eduItems} />
                <TimelineSection title="Certifications" icon={Award} items={certItems} />
            </section>

            <section id="twitter" className="py-16">
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-3">
                    <Twitter size={24} /> On the Internet
                </h2>
                <p className="text-muted mb-12">Things I share on X (Twitter).</p>

                <div className="columns-1 md:columns-2 gap-6">
                    {aboutData.tweets.map((tweet, index) => (
                        <div key={index} className="break-inside-avoid bg-card-bg border border-border rounded-xl p-6 mb-6 animate-fade-in">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-border"></div>
                                    <div>
                                        <div className="text-sm font-bold">{heroData.name}</div>
                                        <div className="text-[0.75rem] text-muted">@vinayBhoure</div>
                                    </div>
                                </div>
                                <Twitter size={16} className="text-[#1DA1F2]" />
                            </div>
                            <p className="text-[0.9375rem] leading-relaxed mb-4">{tweet.content}</p>
                            <div className="text-[0.75rem] text-muted font-mono">{tweet.date}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;
