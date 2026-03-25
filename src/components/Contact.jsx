import React from 'react';
import { heroData } from '../data/heroData';

const Contact = () => {
    return (
        <section id="contact" className="py-24 text-center">
            <h2 className="text-[2.5rem] font-bold mb-4 tracking-tight">Let's build something together.</h2>
            <p className="text-muted mb-10 max-w-[500px] mx-auto leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
                href={`mailto:${heroData.email}`}
                className="px-10 py-4 bg-accent text-white rounded-lg font-medium text-lg hover:translate-y-[-2px] hover:opacity-90 transition-all inline-block shadow-lg shadow-[rgba(59,130,246,0.3)]"
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
