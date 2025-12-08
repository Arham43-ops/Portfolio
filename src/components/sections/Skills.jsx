import { motion } from 'framer-motion';
import SkillCard from '../ui/SkillCard';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            title: 'Web Development',
            description: 'Building responsive and performant web applications using modern frameworks and best practices.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            ),
            title: '3D Graphics',
            description: 'Creating immersive 3D experiences with Three.js and WebGL for interactive visualizations.',
            technologies: ['Three.js', 'WebGL', 'Blender'],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'UI/UX Design',
            description: 'Designing intuitive and beautiful interfaces that provide exceptional user experiences.',
            technologies: ['Figma', 'Adobe XD', 'Sketch'],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            ),
            title: 'Backend Development',
            description: 'Developing robust server-side applications and RESTful APIs with modern technologies.',
            technologies: ['Node.js', 'Python', 'MongoDB'],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            ),
            title: 'Animation',
            description: 'Bringing designs to life with smooth animations and micro-interactions.',
            technologies: ['GSAP', 'Framer Motion', 'CSS Animations'],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: 'Performance',
            description: 'Optimizing applications for speed, efficiency, and exceptional performance.',
            technologies: ['Webpack', 'Vite', 'SEO'],
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
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header" data-scroll>
                    <span className="section-label">What I Do</span>
                    <h2 className="section-title">Skills & Services</h2>
                    <div className="title-underline"></div>
                </div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
