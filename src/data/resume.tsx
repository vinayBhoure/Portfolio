import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vinay Bhoure",
  initials: "VB",
  url: "https://vinaybhoure.me",
  location: "Indore, Madhya Pradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpg",
  skills: [
    "React Js",
    "Tailwind CSS",
    "Node Js",
    "Express Js",
    "Socket Io",
    "Mongo DB",
    "PostgreSQL",
    "Git & Github",
    "Figma",
    "C++",
    "Typescript",
    "Javascript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/project", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "vinaybhoure@gmail.com",
    tel: "+91 9343297622",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/vinayBhoure",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vinaybhoure",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.x.com/vinaybhoure_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Self-Employed",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/freelancer.png",
      start: "April 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Codesmith",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Software Developement Engineer",
      logoUrl: "/atomic.png",
      start: "Oct 2023",
      end: "Nov 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Maulana Azad National Institute of Technology",
      href: "https://manit.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Shri Saibaba Public School",
      href: "https://uwaterloo.ca",
      degree: "Higher Secondary School",
      logoUrl: "/waterloo.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "EasyRides",
      href: "https://chatcollect.com",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://chatcollect.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },

    {
      title: "Alonzo Clothing",
      href: "https://",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Typescript",
        "React JS",
        "Node js",
        "Express js",
        "Mongo DB",
        "Firebase",
        "TailwindCSS",
        "Phone pe SDK",
        "Node Cache",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://chatcollect.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
