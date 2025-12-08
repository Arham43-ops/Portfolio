import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            ),
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
            tags: ['React', 'Node.js', 'MongoDB'],
            link: '#',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
            ),
            title: '3D Product Visualizer',
            description: 'Interactive 3D product showcase using Three.js with real-time customization options.',
            tags: ['Three.js', 'WebGL', 'JavaScript'],
            link: '#',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                </svg>
            ),
            title: 'Fitness Tracking App',
            description: 'Progressive web app for tracking workouts with data visualization and goal setting.',
            tags: ['PWA', 'Chart.js', 'Firebase'],
            link: '#',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                </svg>
            ),
            title: 'Design Portfolio',
            description: 'Elegant portfolio website featuring smooth animations and creative layouts.',
            tags: ['GSAP', 'CSS Grid', 'Responsive'],
            link: '#',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            ),
            title: 'AI Chatbot Interface',
            description: 'Modern chat interface with natural language processing and real-time responses.',
            tags: ['AI', 'WebSocket', 'React'],
            link: '#',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            ),
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization dashboard with interactive charts and metrics.',
            tags: ['D3.js', 'Vue.js', 'API'],
            link: '#',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header" data-scroll>
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                </div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
