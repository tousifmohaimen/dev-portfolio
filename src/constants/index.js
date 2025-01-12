import {
  mobile,
  backend,
  creator,
  web,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
  python,
  githubs,
  fiverr,
  doc,
  upwork,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githubs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "September 2022 -  March 2023",
    points: [
      "Converting Figma and PSD designs into pixel-perfect, responsive HTML/CSS websites with clean and maintainable code.",
      "Optimizing websites for performance, cross-browser compatibility, and mobile responsiveness to ensure a seamless user experience",
      "Collaborating with designers and clients to understand design requirements and deliver high-quality, accurate conversions",
      "Integrating animations, interactive elements, and modern frameworks (e.g., Bootstrap, Tailwind CSS) to enhance website functionality and aesthetics.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "UpWork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "March 2023 - December 2023",
    points: [
      "Converting Figma and PSD designs into pixel-perfect, responsive HTML/CSS websites with clean and maintainable code.",
      "Optimizing websites for performance, cross-browser compatibility, and mobile responsiveness to ensure a seamless user experience",
      "Collaborating with designers and clients to understand design requirements and deliver high-quality, accurate conversions",
      "Integrating animations, interactive elements, and modern frameworks (e.g., Bootstrap, Tailwind CSS) to enhance website functionality and aesthetics.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Health Digital Technologies Sdn Bhd (DoctorOnCall)",
    icon: doc,
    iconBg: "#383E56",
    date: "March 2024 - November 2024",
    points: [
      "Designed and developed dynamic user interfaces using React.js, implementing responsive and interactive features to enhance the user experience.",
      "Built and maintained backend APIs with Node.js and Express, integrating MongoDB for data storage and ensuring seamless communication between frontend and backend systems.",
      "Collaborated with cross-functional teams to deliver end-to-end solutions, including handling API integrations and optimizing website performance.",
      "Developed and customized WordPress plugins, including an SSO authentication plugin, to ensure seamless functionality across the company’s web platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A highly dependable developer, Tousif collaborates effectively and always meets project deadlines.",
    name: "Haris Mateen",
    designation: "CIO",
    company: "DoctorOnCall",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "With outstanding attention to detail, Tousif transformed our designs into pixel-perfect, responsive websites",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Tousif's technical expertise and problem-solving abilities were instrumental in the success of our FWD projects.",
    name: "Nour Mtawea",
    designation: "Team Lead",
    company: "DoctorOnCall",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
