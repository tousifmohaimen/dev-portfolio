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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Prompt Engineer",
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
    name: "My Shop",
    description:
      "An intuitive e-commerce platform that enables users to browse, search, and purchase products seamlessly, offering secure payment options, a user-friendly interface, and efficient order management for a hassle-free shopping experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tousifmohaimen/Myshop",
  },
  {
    name: "Job IT",
    description:
      "A comprehensive web application designed to streamline the process of job posting and job searching, providing an intuitive platform for employers to post opportunities and for job seekers to find and apply for their ideal roles.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tousifmohaimen/Job-Portal/",
  },
  {
    name: "Facial Recognition Based Class Attendance System",
    description:
      "The platform leverages advanced computer vision technology to instantly identify and record student presence in classrooms, making attendance monitoring effortless and accurate.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/tousifmohaimen/Automated-Class-Attendance-Web-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
