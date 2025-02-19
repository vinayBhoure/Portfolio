import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vinay Bhoure",
  initials: "VB",
  url: "https://www.github.com/vinayBhoure",
  location: "Indore, Madhya Pradesh, India",
  locationLink: "https://www.google.com/maps/place/indore",
  description:
    "Final year student trying to be Software Engineer. I love building things and helping people. Very active on Twitter.",
  summary:
    "I'm a final year B.Tech student at MANIT Bhopal, specializing in Computer Science Engineering. With experience in both frontend and backend development, I've worked on projects ranging from cab booking systems to e-commerce platforms. My technical journey includes an internship at CodeSmith Dev where I engineered scalable APIs using Golang and PostgreSQL.",
  avatarUrl: "/me.jpg",
  skills: [
    // Frontned
    "React Js",
    "Tailwind CSS",
    "Redux Toolkit",

    //Backend
    "Node Js",
    "Express Js",
    "Socket Io",

    // Databases
    "Mongo DB",
    "PostgreSQL",

    // DevOps & Tools 
    "Git & Github",

    // UX/UI
    "Figma",

    // Programming Languages
    "C++",
    "Typescript",
    "Javascript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/why.viinay/",
        icon: Icons.instagram,
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
      company: "Freelancer",
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
        "Built scalable APIs with Golang and SQLC, ensuring smooth CRUD operations and efficient database interactions. Designed and developed these APIs from scratch, gaining valuable experience in optimizing backend performance and reliability.",
    },
  ],
  education: [
    {
      school: "Maulana Azad National Institute of Technology",
      href: "https://manit.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/manit.png",
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
        "Built a cab booking app with real-time tracking and communication using Socket.io. Learned scalable architecture and real-time data handling, boosting my full-stack development skills.",
      technologies: [
        "React Js",
        "Tailwind CSS",
        "Node Js",
        "Express Js",
        "Socket Io",
        "Mongo DB",
        "OAuth"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/vinayBhoure/EasyRides",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/vinayBhoure/EasyRides",
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
        "[Alonzo Clothing - Under Development](https://alonzoclothing.vercel.app/) | Built a responsive e-commerce site with an admin dashboard, payment integration, and caching for better performance.预计 30% engagement boost.",
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
          href: "https://alonzoclothing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/vinayBhoure/MERN-Placement",
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
      title: "Master Server",
      dates: "February 14, 2025 - Present",
      location: "Learning",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "ChotiLink",
      dates: "February 14, 2025 - Present",
      location: "Indore",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Gitbox",
      dates: "February 14, 2025 - Present",
      location: "Indore",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Slack Clone",
      dates: "February 14, 2025 - Present",
      location: "Indore",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Taskify - MERN",
      dates: "February 14, 2025 - Present",
      location: "Indore",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Arabian Ark - Clone",
      dates: "February 14, 2025 - Present",
      location: "Client Work",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Aman Events Bhopal",
      dates: "February 14, 2025 - Present",
      location: "Client Work",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    }
  ],
} as const;
