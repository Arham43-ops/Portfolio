import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ABOUT_DATA } from '../../data';
import './About.css';

const StatCard = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <motion.div
            className="stat-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
        >
            <div className="stat-number">{count}+</div>
            <div className="stat-label">{label}</div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header" data-scroll>
                    <span className="section-label">Who Am I</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <motion.div
                        className="about-image"
                        data-scroll
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="image-wrapper">
                            <div className="image-placeholder">
                                <img 
                                    src="/img.jpg" 
                                    alt="Profile" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} 
                                />
                            </div>
                            <div className="image-float float-1"></div>
                            <div className="image-float float-2"></div>
                            <div className="image-float float-3"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        data-scroll
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>{ABOUT_DATA.subtitle}</h3>
                        {ABOUT_DATA.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        <div className="about-stats">
                            {ABOUT_DATA.stats.map((stat, index) => (
                                <StatCard key={index} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
