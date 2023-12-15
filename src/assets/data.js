import React from "../assets/React.png";
import Golang from "../assets/Golang.png";
import git from "../assets/git.png";
import Github from "../assets/Github.png";

export const navlinks = ["Skills", "Work", "Project", "About", "Contact"];

export const skillsArr = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind css", "Redux"],
    image: React,
  },
  {
    category: "Backend + DB",
    skills: ["Golang", "PostgreSQL"],
    image: Golang,
  },
  {
    category: "Others",
    skills: ["C++", "SQLc", "Git", "GitHub"],
    image: git,
  },
];

export const experienceArr = [
  {
    role: "Software Engineer Intern",
    company: "Codesmith Dev",
    description:
      "Developed RESTful APIs, demonstrating strong programming skills in Golang. Designed and implemented database solutions using PostgreSQL. Utilized SQLc for efficient management and execution of database queries",
    date: "Oct 2023 - Nov 2023",
    location: "Remote, United States",
  },
  {
    role: "Management Head",
    company: "Intellect Browsers' Consortium, MANIT",
    description: "Spearheaded comprehensive management activities, ensuring seamless execution of MUN'23.Pioneered Azure23, significantly elevating NIT Bhopals prominence",
    date: "Sept 2023 - Present",
    location: "MANIT, Bhopal",
  },
];

export const projectArr = [
  {
    image: Github,
    name: "Portfolio (vinaybhoure.netliffy.app)",
    description: "this is place where i show case my skills and experience",
    githubURL:"",
    livedemo:"",
  },
  {
    image: Github,
    name: "Zepto Clone (zepto.netlify.app)",
    description:
      "Zepto is your next-door quick commerce app, delivering online groceries,fruits,vegetables, personal care, electronics & much more to you in just minutes.",
      githubURL:"",
      livedemo:"",
  }
];


export const blogArr = [
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "Blog Date",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "Blog Date",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];