export const HERO_DATA = {
    name: "Arham Topiwala",
    role: "Full Stack Developer",
    subheading: "Creative Developer & 3D Enthusiast crafting meaningful, modern, and visually-driven digital experiences. I blend code, design, and motion to build smooth, immersive interfaces that feel alive."
};

export const ABOUT_DATA = {
    title: "About Me",
    subtitle: "Passionate Developer with a Creative Vision",
    bio: [
        "I'm a full-stack developer dedicated to building modern digital experiences powered by clean design, smooth interaction, and cutting-edge web technologies. With experience in 3D graphics, animation, and full-stack engineering, I specialize in crafting interfaces that feel immersive, polished, and meaningful.",
        "My journey started with curiosity and evolved into a constant pursuit of excellence and innovation. I love transforming concepts into fully functional, visually engaging digital products — from interactive landing pages to complete platforms.",
    ],
    stats: [
        { value: 35, label: "Projects Completed" },
        { value: 10, label: "Happy Clients" },
        { value: 3, label: "Years Experience" }
    ]
};

import stoceasyImg from '../assets/projects/stoceasy.png';
import aivaImg from '../assets/projects/aiva.png';
import resumeiqImg from '../assets/projects/resumeiq.png';
import flipkartImg from '../assets/projects/flipkart.png';
import domainImg from '../assets/projects/domain.png';
import portfolioImg from '../assets/projects/portfolio.png';

export const PROJECTS_DATA = [
    {
        id: 1,
        title: "StocEasy",
        description: "An advanced Online Stock Exchange Platform that provides real-time stock data and trading capabilities. Features a dynamic dashboard with live charts, portfolio management, and secure transaction handling.",
        tech: ["Python", "Django", "Streamlit", "Redis", "MySQL"],
        img: stoceasyImg,
        link: "https://github.com/Arham43-ops/StockEasy"
    },
    {
        id: 2,
        title: "A.I.V.A Chatbot",
        description: "A sophisticated AI-powered chatbot designed for intelligent interactions. It leverages natural language processing to understand user queries and provide accurate, context-aware responses in real-time.",
        tech: ["Python", "Django", "MySQL"],
        img: aivaImg,
        link: "https://github.com/Arham43-ops/aiva_chatbot"
    },
    {
        id: 3,
        title: "ResumeIQ",
        description: "An intelligent Resume Analyzer and Builder that uses AI to evaluate resumes against job descriptions. It offers actionable insights and optimization suggestions to help users land their dream jobs.",
        tech: ["Streamlit", "AI", "Gemini API", "Job Search"],
        img: resumeiqImg,
        link: "https://github.com/Arham43-ops/ResumeIQ"
    },
    {
        id: 4,
        title: "Flipkart Clone",
        description: "A fully functional e-commerce application replicating the core features of Flipkart. Includes product browsing, search functionality, cart management, and a seamless checkout process.",
        tech: ["Django", "Python", "SQLite3"],
        img: flipkartImg,
        link: "https://github.com/Arham43-ops/Flipkart_Clone"
    },
    {
        id: 5,
        title: "Domain Management System",
        description: "A robust Java GUI application for managing web domains. It streamlines the process of registering, renewing, and tracking domain names with a user-friendly interface and secure database integration.",
        tech: ["Java GUI", "MySQL"],
        img: domainImg,
        link: "https://github.com/Arham43-ops/Domain-Management-System"
    },
    {
        id: 6,
        title: "3D Interactive Portfolio",
        description: "A cutting-edge personal portfolio website featuring immersive 3D graphics and animations. It showcases projects and skills in a visually stunning, interactive 3D environment.",
        tech: ["React", "Node.js", "Three.js", "Vite"],
        img: portfolioImg,
        link: "https://github.com/Arham43-ops/Portfolio"
    }
];

export const SKILLS_DATA = [
    {
        title: 'Web Development',
        description: 'Building responsive and performant web applications using modern frameworks and best practices.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
        icon: 'code'
    },
    {
        title: 'Backend Development',
        description: 'Developing robust server-side applications and RESTful APIs with modern technologies.',
        technologies: ['Node.js', 'Express.js', 'Python', 'Java'],
        icon: 'server'
    },
    {
        title: 'Database',
        description: 'Designing and managing efficient database schemas for data integrity and performance.',
        technologies: ['MySQL', 'SQLite3', 'Oracle'],
        icon: 'database'
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive and beautiful interfaces that provide exceptional user experiences.',
        technologies: ['Figma', 'Adobe Illustrator'],
        icon: 'design'
    },
    {
        title: '3D & Animation',
        description: 'Creating immersive 3D experiences and smooth animations for interactive visualizations.',
        technologies: ['Three.js', 'Blender', '3D Animations'],
        icon: '3d'
    },
    {
        title: 'Tools & AI',
        description: 'Leveraging modern tools and AI integration to enhance development workflows and capabilities.',
        technologies: ['Git', 'GitHub', 'AI Integration'],
        icon: 'tool'
    },
];

export const CONTACT_DATA = {
    email: "topiwalaarham@gmail.com",
    phone: "9512959909",
    location: "Ahmedabad, Gujarat, India",
    social: [
        { name: "GitHub", url: "https://github.com/Arham43-ops/", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/arham43-ops/", icon: "linkedin" },
        { name: "Instagram", url: "https://www.instagram.com/ofc.not_arham/", icon: "instagram" },
        { name: "LeetCode", url: "https://leetcode.com/u/arham43-ops/", icon: "code" }
    ]
};
