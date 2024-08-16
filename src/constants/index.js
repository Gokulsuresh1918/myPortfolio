import {
  mobile,
  backend,
  creator,
  web,
  arya,
  nextjs,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  quizapp,
  expensetracker,
  weatherapp,
  petStation,
  edunest,
  
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  //   {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Gokul's deep understanding of the MERN stack was crucial in the successful development of our e-commerce platform. His problem-solving skills and dedication truly set him apart.",
    name: "Aswin",
    designation: "Junior Microservice Developer",
    company: "Tech Innovations",
    image: "https://avatars.githubusercontent.com/u/115729002?v=4",
  },
  {
    testimonial:
      "Gokul's expertise in Node.js was evident in the seamless integration of our backend services. His ability to handle complex tasks with ease was a game-changer for our project.",
    name: "Vishakh Cs",
    designation: "Node.js Developer",
    company: "Code Ventures",
    image: "https://avatars.githubusercontent.com/u/143394085?v=4",
  },
  {
    testimonial:
      "Working with Gokul on our React-based applications was an exceptional experience. His attention to detail and his ability to optimize performance were invaluable to our success.",
    name: "Greeshma",
    designation: "React Developer",
    company: "Web Solutions",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFwPlyLfSAXkg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1719655383364?e=1724432400&v=beta&t=2PAeiFdcSwja846w_rbtW04K8QWVFsvWIf0DzEFI-eE",
  },
  {
    testimonial:
      "Gokul's analytical skills from his physics background greatly contributed to the innovative solutions he brought to our web development projects. His approach to problem-solving is impressive.",
    name: "Aryakrishna",
    designation: "MSc Physics Graduate",
    // company: "Scientific Web Tech",
    image: arya,
  },
];

const projects = [
  {
    name: "EduNest",
    description:
      "A comprehensive online learning platform that offers a range of courses, interactive quizzes, and a robust system for tracking learning progress.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "purple-text-gradient",
      },
    ],
    image: edunest,
    source_code_link: "https://github.com/Gokulsuresh1918/EduNest-FrontEnd", // Replace with your actual GitHub link
    Demo_link: "https://https://www.edunest.life", // Replace with your actual GitHub link
  },
  {
    name: "PetStation",
    description:
      "An e-commerce platform designed for pet lovers to buy and sell pet supplies, featuring user-friendly interfaces and a scalable backend.",
    tags: [
      {
        name: "Ṛazorpay API",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "BootStrap",
        color: "purple-text-gradient",
      },
    ],
    image: petStation, 
    source_code_link: "https://github.com/Gokulsuresh1918/Pet-StatioN",
    Demo_link: "https://petsstation.shop/" 
  },
  {
    name: "WeatherApp",
    description:
      "A weather forecasting application that provides users with current weather conditions, forecasts, and various weather-related data based on their location.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "TailWind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp, // Replace with the actual image import for WeatherApp
    source_code_link: "https://github.com/Gokulsuresh1918/WeatherZone",
    Demo_link: "https://petsstation.shop/" 
  },
  {
    name: "Expense Tracker",
    description:
      "A personal finance application that helps users track their expenses, set budgets, and view spending reports to manage their finances more effectively.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Trivia DB",
        color: "purple-text-gradient",
      },
    ],
    image: expensetracker, // Replace with the actual image import for Expense Tracker
    source_code_link: "https://github.com/Gokulsuresh1918/ExpenceTracked", 
    Demo_link: "https://expence-tracker-gokul.vercel.app" 
  },
  {
    name: "Quiz Application",
    description:
      "An interactive quiz application that allows users to answer questions, view results, and track their progress across multiple quizzes.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quizapp, // Replace with the actual image import for Quiz Application
    source_code_link: "https://github.com/Gokulsuresh1918/quizapp", 
    Demo_link: "https://quizhub-gokul.vercel.app/" 
  },
];

export { services, technologies, experiences, testimonials, projects };
