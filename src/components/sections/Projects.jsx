import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { PROJECTS_DATA } from '../../data';
import './Projects.css';

const Projects = () => {
    const getIcon = (iconName) => {
        // Default icon if none specified or found
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        );
    };

    const projects = PROJECTS_DATA.map(project => ({
        ...project,
        icon: getIcon(project.icon)
    }));

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
