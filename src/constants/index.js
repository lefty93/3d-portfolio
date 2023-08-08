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
    figma,
    docker,
    meta,
    starbucks,
    longi,
    cma,
    aia,
    tesla,
    shopify,
    cafeorder,
    raiahotel,
    pomodoro,
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
        title: "React Developer",
        icon: mobile,
    },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
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
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Equipment Engineer",
        company_name: "Longi",
        icon: longi,
        iconBg: "#383E56",
        date: "September 2017 - September 2018",
        points: [
            " Conduct preventive maintenance on process equipment to minimize downtime and extend equipment lifespan",
            "Collaborate with the process team to identify the root causes of defects and wafer breakage, and devise strategies for reduction, improvement, or elimination.",
            "Prepare PM checklists for new machines.",
            "Fulfil additional job-related tasks as assigned by the section manager/lead engineer.",
        ],
    },
    {
        title: "Engineering Administrator",
        company_name: "Cahaya Mutiara Asia",
        icon: cma,
        iconBg: "#E6DEDD",
        date: "November 2018 - December 2021",
        points: [
            "Read and interpret engineering drawings and diagrams.",
            "Communicate with vendors to ensure that clients' requirements are fulfilled and comply with American Petroleum Institute(API) standard.",
            " Performs other job-related tasks as required by the leader/manager.",
        ],
    },
    {
        title: "Personal Assistant",
        company_name: "AIA",
        icon: aia,
        iconBg: "#383E56",
        date: "September 2022 - Present",
        points: [
            "Assisting clients in submitting insurance claim applications to receive compensation.",
            "Processing insurance claims and managing insurance denials.",
            "Validating insurance coverage and entering patient information and billing codes into the system.",
            " Performing administrative duties, including appointment scheduling, billing, and insurance claims processing.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Cafe Order",
        description:
            "Web-based platform that allows users to order drinks with ease and convenience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "framer-motion",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: cafeorder,
        source_code_link: "https://github.com/lefty93/food-order",
        webpage_link: "https://calm-coffee-325167.netlify.app/",
    },
    {
        name: "Raia Hotel Landing Page",
        description:
            "Try to clone and modify with existing landing page with react and basic css.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },

        ],
        image: raiahotel,
        source_code_link: "https://github.com/lefty93/react-web",
        webpage_link: "https://raia-clone-71743f.netlify.app/"
    },
    {
        name: "Pomodoro",
        description:
            "A simple pomodoro timer embedded with audio player.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },

            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: pomodoro,
        source_code_link: "https://github.com/lefty93/pomoclock",
        webpage_link: "https://simple-pomodoro-507976.netlify.app/"
    },
];

export { services, technologies, experiences, testimonials, projects };