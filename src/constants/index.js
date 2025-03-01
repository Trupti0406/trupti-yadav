import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  twp,
  pep,
  pingme,
  twitter,
  estore,
  yt,
  food,
  sales,
  bootstrap,
  daisyui,
  express,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "DaisyUi",
    icon: daisyui,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Infitout Financial Technologies",
    icon: twp,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Present",
    points: [
      "Enhancing and maintaining an options trading platform serving 20k+ users, ensuring high performance and scalability.",
      "Developing an AI-powered chatbot using Node.js and OpenAI API, automating trading-related queries, and improving customer engagement.",
      "Implementing real-time market analysis reports, integrating financial APIs to generate automated daily trading insights in PDF format.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Infitout Financial Technologies",
    icon: twp,
    iconBg: "#FFFFFF",
    date: "June 2023 - Jan 2023",
    points: [
      "Developed options trading platform with an optimized UX across mobile and desktop platforms, resulting in a 15% increase in user engagement.",
      "Integrated RESTful APIs and WebSockets for real-time data fetching, maintaining high-performance responsive web applications.",
      "Implemented authentication and authorization and enhanced UI/UX with modern styling using Tailwind CSS.",
    ],
  },
  {
    title: "Product Engineering Intern",
    company_name: "Pepcoding Education Pvt. Ltd.",
    icon: pep,
    iconBg: "#FFFFFF",
    date: "Sep 2021 - May 2022",
    points: [
      "Led UI development for NADOS, an education platform with 10k+ active users, improving user experience and navigation.",
      "Created comprehensive documentation and video lectures for the Web Development Curriculum, helping students master frontend and backend technologies.",
      "Mentored 100+ students and working professionals in Frontend tech stacks, providing hands-on guidance and project-based learning.",
    ],
  },
];

const projects = [
  {
    name: "Ping Me",
    description:
      "A real-time chat application enabling users to send text, images, and PDFs instantly. Built with MERN and Socket.IO",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pingme,
    source_code_link: "https://github.com/Trupti0406/PingMe",
    live_demo_link: "https://pingme-rkv6.onrender.com/",
  },
  {
    name: "Twitter Clone",
    description:
      "A social media platform where users can post tweets, engage with replies, and view profiles, replicating Twitter's core features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/Trupti0406/twitter-clone",
    live_demo_link: "https://twitter-by-trupti.onrender.com/",
  },
  {
    name: "MERN E-Store",
    description:
      "A full-fledged e-commerce platform with authentication, cart, order history, and many more advanced features.",
    tags: [
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mern",
        color: "pink-text-gradient",
      },
    ],
    image: estore,
    source_code_link: "https://github.com/Trupti0406/MERN-E-Store",
    live_demo_link: "https://e-store-p9j0.onrender.com/",
  },
  {
    name: "Youtube Clone",
    description:
      "A responsive video streaming platform with custom categories, channel pages, and seamless video playback.",
    tags: [
      {
        name: "mui",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: yt,
    source_code_link: "https://github.com/Trupti0406/youtube-clone",
    live_demo_link: "https://clone-5c081.web.app/",
  },
  {
    name: "Food Explorer",
    description:
      "A recipe discovery app with search, cuisine-based filtering, and recipe pages to explore ingredients and instructions.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "spoonacular-api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Trupti0406/food-explorer",
    live_demo_link: "https://food-explorer-e15b5.web.app/",
  },
  {
    name: "Sales Calc",
    description:
      "A sales management platform allowing users to register, track sales, view top sales, and calculate total revenue efficiently.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sales,
    source_code_link: "https://github.com/Trupti0406/sales-app",
    live_demo_link: "https://sales-app-rza5.onrender.com/",
  },
];

export { technologies, experiences, projects };
