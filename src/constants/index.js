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
  nextJs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  linkedIn,
  github,
  octrans,
  country,
  ecommerce,
  expense,
  mansat,
  miniprob,
  finschedule,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Next Js Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "Next JS",
    icon: nextJs,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Octrans Technologies",
    company_website: "https://octranstechnologies.com/",
    icon: octrans,
    iconBg: "#E6DEDD",
    date: "jun 2023 - Present",
    points: [
      "Developed and maintained high-performance applications using the MERN stack, reducing page load times by 30% and increasing user engagement.",
      "Developed and optimized RESTful APIs in Node.js and Express, achieving a 30% improvement in response times, resulting in enhanced user satisfaction.",
      "Optimized MongoDB queries and implemented database indexing, resulting in a 40% reduction in query time and faster data retrieval.",
      "Participated in Agile development and daily stand-ups and performed unit testing using Jest to maintain code quality.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Octrans Technologies",
    company_website: "https://octranstechnologies.com/",
    icon: octrans,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jun 2023",
    points: [
      "Enhanced the user experience by implementing interactive, responsive designs in React ,Redux, Next boosting traffic by 20%.", "Implemented Web-design and wireframe using figma.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const projects = [
  {
    name: "E-commerce",
    description:
      "Developed a dynamic e-commerce web app with product catalog, shopping cart,and payment integration.Technologies: React, Node.js, Express, MongoDB, Stripe APIContributions: Built modular, reusable components for efficient front-end development.Integrated a secure REST API for product data, authentication, and transactions.Optimized MongoDB queries",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,

  },
  {
    name: "FinSchedule",
    description:
      "Built a scheduling app clone with customizable availability, appointment management, and personalized links.Tech Stack: Next.js, React, Tailwind CSS, Shadcn, Clerk(auth), NeonDB.Contributions: Designed responsive UI with Next.js, Tailwind, and Shadcn Configured NeonDB for real - time data and built APIs. Integrated Clerk for secure user authentication.",

    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "neonDB",
        color: "pink-text-gradient",
      },
    ],
    image: finschedule,
    hosted_link: "",
  },
  {
    name: "Mansat (Schools Group):",
    description:
      "Developed a web application for a group of five schools to manage and respond to event-related inquiries.Technologies Used: React, Redux for state management Contributions: Created individual school pages that display information Implemented Redux to manage and sync enquiries across the application, ensuring data consistency across different school pages.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mansat,
    hosted_link: "/",
  },
  {
    name: "Country Info",
    description:
      "Country Info is project made for understanding nature of react.Implemented technologies like dynamic routing,context api,dark mode,custom hooks,shimmer effect.Project shows filter functionality according to continants and border countries multiple fetch request.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: country,
    hosted_link:
      "/",
  },
  {
    name: "Expense Tracker",
    description:
      "Project made for understanding fetching data from form to table.Use of localhost,filter,sort and user authentication. Also use of custom hooks which made reusable componants for project.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    hosted_link: "",
  },
  {
    name: "FrontendDev Mini Projects",
    description: "Accordion, counter, Imagegallery, Productdiscount, StarRating,Stepper,Stonepaperscissor, StringFormatter, Tabsreact, Telephoneformatter, TicTacToe, Todolist",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "expense",
        color: "pink-text-gradient",
      },
    ],
    image: miniprob,
    hosted_link:
      "/",
  },
];

const personalInfo = {
  name: "Saniya",
  fullName: "Saniya Shaikh",
  email: "saniyashaikh1506@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in JavaScript, and expertise
   in frameworks like React.Js,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work.Cant show original code base following shocase dummy projects .
  Each project is briefly described . 
  It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/12OuOalEA8j9tG8ucHol-JG3g2RWWFKMK/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/saniya-shaikh-61959a213/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Saniya1970",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
