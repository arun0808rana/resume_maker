const data = {
  name: "Arun Rana",
  title: "Fullstack Developer (Node.js)",
  personalInfo: [
    { title: "Email", value: "arun0808rana@gmail.com", type: "text" },
    { title: "Phone", value: "9528151765", type: "text" },
    { title: "Location", value: "Pune", type: "text" },
    {
      title: "Portfolio",
      value: "https://arun0808rana.github.io/portfolio-arun",
      type: "link",
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/arun-rana-680800180",
      type: "link",
    },
    { title: "Github", value: "https://github.com/arun0808rana", type: "link" },
  ],
  experience: [
    {
      id: 1,
      company: "Oodles Technologies",
      position: "Associate Software Engineer",
      dates: {
        from: "Jan 2020",
        to: "Nov 2020",
      },
      location: "Gurgaon",
      website: "https://www.oodlestechnologies.com/",
      responsibilities: [
        "Contributed to the redesign of the main product website, resulting in a 40% increase in user engagement.",
        "Developed and implemented cross-device compatibility.",
        "Implemented the same with a react.js port for clients"
      ],
    },
    {
      id: 2,
      company: "Radiansys Inc",
      position: "Software Engineer",
      dates: {
        from: "May 2021",
        to: "Dec 2021",
      },
      location: "Gurgaon",
      website: "https://www.radiansys.com/",
      responsibilities: [
        "Implemented test driven development in various products/services.",
        "Learned micro-service and event driven architectures.",
      ],
    },
    {
      id: 3,
      company: "Upperthrust Technologies",
      position: "Software Developer",
      dates: {
        from: "Sep 2023",
        to: "Jan 2025",
      },
      location: "Gurgaon",
      website: "https://www.upperthrust.com/",
      responsibilities: [
        "Backend API implementations, TDD, team cordination and delegation.",
        "Implemented cross-device compatibility as well as cross-platforms on cloud",
      ],
    },
  ],
  projects: [
    {
      name: "Veri58",
      details: [
        "It's a multi-tenant architecture based customer data validation service.",
        "Created the serverless(AWS Lambda functions) based APIs for express.js backend and TDD development for code integrity.",
        "Implemented the frontend in react.js for creating an admin portal as well as the client service website.",
      ],
      technologies: [
        "Multi-tenant Architecture",
        "React",
        "Express",
        "AWS Lambda",
        "Serverless",
        "Jest",
        "MUI",
        "Azure Bus",
      ],
    },
    {
      name: "Oodles Dashboard",
      details: [
        "CRM Tool kit for employee",
        "Main roles and responsibilities included API integration, design formats, pixel perfect follow ups on frontend.",
        "Handling API creation for frontend integration, and unit tests.",
      ],
      technologies: [
        "React",
        "Express",
        "Nodejs",
        "Angular",
        "Jest",
        "Karma",
        "AgGrid",
      ],
    },
    {
      name: "Menda",
      details: [
        "Contract and deeds Management Tool",
        "Developed Modular UI: Designed and implemented reusable, responsive React components, ensuring consistency and scalability across the platform while optimizing performance with techniques like lazy loading and memoization.",
        "API development in nest.js. Unit tests using Jest. Redis caching for expensive API calls.",
      ],
      technologies: [
        "React",
        "Nest.js",
        "Jest",
        "Redis",
        "MUI",
        "Redux Toolkit",
      ],
    },
    {
      name: "Centrifi",
      details: [
        "Centralized advertisement platform",
        "Next.js Frontend and Nest.js Backend with graphQL",
      ],
      technologies: [
        "Nest.js",
        "GraphQL",
        "MySql",
        "MongoDb",
        "React.js",
        "Zustand",
        "Jest.js",
        "Minio, S3, GCP",
      ],
    },
    {
      name: "Traffic Engine",
      details: [
        "Traffic engine is a microservice responsible for capturing user engagement and redirecting them to respective inflight-campaigns of centrifi",
        "It's made in Nest.js and consists a puppeteer simulator for event-driven data integrity.",
      ],
      technologies: ["Nest.js", "Puppeteer", "Jest", "MySql"],
    },
    {
      name: "GL Plus",
      details: [
        "Ecommerce App & Admin Dashboard",
        "Ecommerce using nest.js API development, unit tests and react frontend.",
        "E-Commerce Frontend Development: Built a user-friendly e-commerce website with responsive React components for seamless customer interaction and shopping experience.",
      ],
      technologies: ["Nest.js", "MUI", "React", "Zustand", "SASS"],
    },
    {
      name: "Adretreaver",
      details: [
        "Proxy service for seamless un-blocked advertisements in various countries. This has a admin panel as well as online service for end users",
        "Implemented backend APIs in express.js, mongoDB",
        "Integration of the REST protocol based APIs in Vue.js 2",
      ],
      technologies: ["Express.js", "Syncfusion", "React", "Zustand", "SASS"],
    },
    {
      name: "Talenode",
      details: [
        "Multi-tenant based service for data validation of customers.",
        "Implemented backend APIs in express.js and deployment on serverless(AWS Lambda & Azure Functions) & jest test cases",
        "Frontend implementation in react.js with TDD feasability for code-base integrity",
        "Azure bus and AWS SQS for micro-service event driven communication",
      ],
      technologies: [
        "Express.js",
        "MUI",
        "React",
        "Redux Toolkit",
        "Serverless(Lambda & Azure Functions",
      ],
    },
    {
      name: "MBOCW CESS",
      details: [
        "MBOCW CESS is a portal for Maharashtra government's implementing agencies and contractor for CESS payments of government projects.",
        "Implemented backend APIs in express.js and deployment on serverless(AWS Lambda & Azure Functions) & jest test cases",
        "Frontend implementation in react.js with TDD feasability for code-base integrity",
        "Azure bus and AWS SQS for micro-service event driven communication",
      ],
      technologies: ["Express.js", "MUI", "React", "Redux Toolkit", "SASS"],
    },
    {
      name: "Lavily",
      details: [
        "Telecalling Admin Desktop App.",
        "Integrated the vue.js frontend in electron.js framework",
        "Frontend implementation in react.js with TDD driven code-base",
      ],
      technologies: [
        "Electron.js",
        "AgGrid",
        "Vue.js 3",
        "Pinia",
        "CSS-IN-JS(Emotion)",
      ],
    },
    {
      name: "UCAT",
      details: [
        "UCAT is an Medical Exam Portal for Australia.",
        "API integration and re-vamped the legacy less performant code base to a new version, following modern approaches for easy maintenance",
        "Backend implementation in nest.js and postgres and TDD(Jest)",
      ],
      technologies: ["Nest.js", "Ant", "React", "Redux", "Jest", "SASS"],
    },
    {
      name: "Medentry Math Trainer",
      details: [
        "Online mathematics classes and assessment based portal.",
        "Implemented backend APIs in nest.js with jest for TDD",
        "Frontend implementation in react.js(class based)",
      ],
      technologies: ["Nest.js", "MUI", "React", "Redux/Zustand", "Jest"],
    },
    {
      name: "Hearty Fresh Saboo",
      details: [
        "hearty Fresh Saboo is an e-commerce platform with an order management admin portal.",
        "Implemented backend APIs in express.js",
        "Frontend implementation in react.js with unit test cases in jest",
      ],
      technologies: ["Express.js", "MUI", "React", "Redux Toolkit"],
    },
    {
      name: "ECS(Email Campaign Stats)/OMS",
      details: [
        "ECS OMS is a microservice that handles order management for campaigns run in another project called ECS.",
        "Implemented backend APIs in Nest.js & jest for unit tests. The response wrapper is graphql",
        "Frontend implementation in next.js and graphql",
        "Implemented GCP bull queue for communication between ECS and OMS",
      ],
      technologies: ["Nest.js", "Chakra UI", "React", "Redux Toolkit", "SASS"],
    },
    {
      name: "RK Travels",
      details: [
        "RK Travels is an admin portal for handling flight passengers and cab drivers. Ride informations are exchanged and communicated to both the parties through communication channels(Email and Whatsapp API).",
        "Implemented backend APIs in express.js",
        "Frontend development using react.js, MUI and redux toolkit",
      ],
      technologies: ["Express.js", "React", "Redux Toolkit"],
    },
    // Add more projects here...
  ],
  skills: [
    { id: 1, name: "Node.js" },
    { id: 2, name: "Nest.js" },
    { id: 3, name: "Typescript" },
    { id: 4, name: "React.js" },
    { id: 5, name: "Express.js" },
    { id: 6, name: "Postgres" },
    { id: 7, name: "MySQL" },
    { id: 8, name: "MongoDB" },
    { id: 9, name: "Redis" },
    { id: 11, name: "Azure Bus, GCP Bull & RabbitMQ" },
    { id: 13, name: "Jest & Karma" },
    { id: 14, name: "Puppeteer.js" },
    { id: 15, name: "Vue.js 2-3" },
    { id: 16, name: "Angular 5-10" },
    { id: 17, name: "MUI, Ant, Chakra UI" },
    { id: 18, name: "Syncfusion" },
    { id: 19, name: "Redux, Zustand & Pinia" },
    { id: 20, name: "Typeorm & Prisma" },
    { id: 22, name: "Google & Microsoft SSO" },
    { id: 23, name: "Zod & Yup" },
    { id: 24, name: "Electron.js" },
    { id: 25, name: "CSS-IN-JS(Emotion & Styled Components)" },
  ],
  certifications: [
    {
      id: "react-cert-1",
      name: "React.js Certificate",
      institution: "Great Learning",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7100827493816803330/?originTrackingId=ChCBiEY3RyeWgPvCR2Q56g%3D%3D",
    },
    {
      id: "react-cert-2",
      name: "React.js Certificate",
      institution: "Cut Short",
      link: "https://www.linkedin.com/posts/arun-rana-680800180_cutshort-react-certificate-activity-7100826908740714496-5X18?utm_source=share&utm_medium=member_desktop",
    },
  ],
  languages: ["English", "Hindi"],
};

export default data;
