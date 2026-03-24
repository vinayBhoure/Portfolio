import React from 'react';
import { Github } from 'lucide-react';
import { aboutData } from '../data/aboutData';

const GitHubActivity = () => {
    // Mock contribution data (371 cells for 53 weeks)
    const totalCells = 53 * 7;
    const contributionCells = Array.from({ length: totalCells }, () => {
        const rand = Math.random();
        if (rand > 0.8) return 4;
        if (rand > 0.6) return 3;
        if (rand > 0.4) return 2;
        if (rand > 0.2) return 1;
        return 0;
    });

    const getLevelClass = (level) => {
        switch (level) {
            case 1: return 'bg-[#0e4429]';
            case 2: return 'bg-[#006d32]';
            case 3: return 'bg-[#26a641]';
            case 4: return 'bg-[#39d353]';
            default: return 'bg-[rgba(255,255,255,0.05)]';
        }
    };

    return (
        <section id="github" className="py-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Github size={24} /> GitHub Activity
            </h2>

            <div className="flex flex-col gap-6">
                <div className="bg-card-bg border border-border rounded-xl p-6 overflow-x-auto shadow-sm animate-fade-in">
                    <div className="mb-4">
                        <span className="font-mono text-[0.75rem] text-muted">Contributions in the last year</span>
                    </div>

                    <div className="grid grid-cols-[repeat(53,1fr)] grid-rows-[repeat(7,1fr)] gap-[3px] min-w-[700px]">
                        {contributionCells.map((level, i) => (
                            <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${getLevelClass(level)}`}></div>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center justify-end gap-2 text-[0.75rem] text-muted">
                        <span>Less</span>
                        <div className="flex gap-[3px]">
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-[rgba(255,255,255,0.05)]"></div>
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]"></div>
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]"></div>
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]"></div>
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]"></div>
                        </div>
                        <span>More</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card-bg border border-border rounded-xl p-6 text-center animate-fade-in delay-1">
                        <div className="text-3xl font-bold text-accent mb-1">480</div>
                        <div className="text-[0.75rem] text-muted uppercase tracking-wider">Total Contributions</div>
                    </div>
                    <div className="bg-card-bg border border-border rounded-xl p-6 text-center animate-fade-in delay-2">
                        <div className="text-3xl font-bold text-accent mb-1">12 days</div>
                        <div className="text-[0.75rem] text-muted uppercase tracking-wider">Current Streak</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
