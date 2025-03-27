import {
    mobile,
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
    figma,
    docker,
    sportson,
    pom,
    proclient,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Node.js Developer",
      icon: web,
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
      name: "Node JS",
      icon: nodejs,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Sportson",
      icon: sportson,
      iconBg: "#383E56",
      date: "Jan. 2022 - Dec. 2024",
      points: [
        "Work in the cycling industry with Sportson's internal portal in React, the portal that manages benefit bikes data, users and support and more.",
        "Used mainly a JavaScript based technology stack that also includes Node.js and works with integrations towards an API, database management and an efficient way of working with the help of AI.",
      ],
    },
    {
      title: "Systems Developer React",
      company_name: "Precise Outsourcing Management",
      icon: pom,
      iconBg: "#E6DEDD",
      date: "Okt. 2021 - Nov. 2021",
      points: [
        "Rebuilt a website for a customer in Norway in the fishing industry from Squarespace to React and Node.js.",
      ],
    },
    {
      title: "Systems Developer",
      company_name: "Proclient System AB",
      icon: proclient,
      iconBg: "#383E56",
      date: "Nov. 2017 - Aug. 2020",
      points: [
        "Tobias was responsible for delivering consulting services within system development regarding the business system Pyramid Business Studio business solution within full stack development in the Visual Cosmos programming language.",
        "Usually had close contact with the end customer, great variety of assignments that touched all sorts of things parts of a comprehensive business system aimed at small/medium-sized businesses.",
        "Also sat a bit with WordPress regarding maintenance of Proclient's website.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Latest Stock News",
      description:
        "A websocket project for fetching the latest stock news in real time from the Alpaca API in TypeScript.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
      ],
      image: reactjs,
      source_code_link: "https://github.com/Toubic/AlpacaAPITrading",
    },
    {
      name: "Portfolio",
      description:
        "My portfolio website, built with React and Tailwind CSS.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
      ],
      image: reactjs,
      source_code_link: "https://github.com/Toubic/Portfolio",
    },
    {
      name: "e_commerce",
      description:
        "An e-commerce website that allows users to buy products and manage their cart. Built with React, Node.js and Stripe.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: reactjs,
      source_code_link: "https://github.com/Toubic/e_commerce",
    },
  ];
  
  export { services, technologies, experiences, projects };
  