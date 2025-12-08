import { motion } from 'framer-motion';
import './SkillCard.css';

const SkillCard = ({ icon, title, description, technologies }) => {
    return (
        <motion.div
            className="skill-card"
            data-scroll
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
        >
            <div className="skill-icon">
                {icon}
            </div>
            <h3 className="skill-title">{title}</h3>
            <p className="skill-description">{description}</p>
            {technologies && (
                <div className="skill-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default SkillCard;
