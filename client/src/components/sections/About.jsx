import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
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
                        <h3>Passionate Developer with a Creative Vision</h3>
                        <p>
                            I'm a full-stack developer specializing in creating immersive web experiences
                            that combine cutting-edge technology with stunning visual design. With expertise
                            in modern web technologies and 3D graphics, I transform ideas into interactive realities.
                        </p>
                        <p>
                            My journey in web development has been driven by a passion for innovation and a
                            commitment to excellence. I believe in crafting solutions that not only meet
                            technical requirements but also deliver exceptional user experiences.
                        </p>

                        <div className="about-stats">
                            <StatCard value={50} label="Projects Completed" />
                            <StatCard value={30} label="Happy Clients" />
                            <StatCard value={5} label="Years Experience" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
