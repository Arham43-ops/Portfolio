import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ icon, title, description, tags, link, img }) => {
    return (
        <motion.div
            className="project-card"
            data-scroll
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
        >
            <div className="project-image">
                {img ? (
                    <img src={img} alt={title} className="project-thumbnail" />
                ) : (
                    <div className="project-icon-wrapper">
                        {icon}
                    </div>
                )}
                <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <a href={link || '#'} className="project-link" aria-label="View project">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                {tags && (
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="project-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
