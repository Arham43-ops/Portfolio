import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import FloatingCodeEditor from '../3d/FloatingCube';
import Button from '../ui/Button';
import { HERO_DATA } from '../../data';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = [
        'Full Stack Developer',
        '3D Graphics Enthusiast',
        'AI Enthusiast',
        'Creative Coder',
        'Problem Solver',
    ];

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % titles.length;
            const fullText = titles[current];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-name">{HERO_DATA.name}</h1>
                    <h2 className="hero-title">
                        <span className="typing-text">{text}</span>
                        <span className="cursor-blink">|</span>
                    </h2>
                    <p className="hero-description">
                        {HERO_DATA.subheading}
                    </p>
                    <div className="hero-buttons">
                        <Button variant="primary" href="#projects">
                            View My Work
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Button>
                        <Button variant="secondary" href="#contact">
                            Get In Touch
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-3d"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={0.8} />
                        <pointLight position={[-10, -10, 5]} intensity={0.3} color="#8b5cf6" />
                        <FloatingCodeEditor />
                    </Canvas>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
