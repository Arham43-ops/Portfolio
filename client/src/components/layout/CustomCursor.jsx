import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Smooth spring physics for cursor movement
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    const followerX = useSpring(0, { stiffness: 150, damping: 20 });
    const followerY = useSpring(0, { stiffness: 150, damping: 20 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            followerX.set(e.clientX);
            followerY.set(e.clientY);

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .project-card, .skill-card, input, textarea'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [cursorX, cursorY, followerX, followerY, isVisible]);

    // Hide cursor on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="cursor-dot"
                style={{
                    left: cursorX,
                    top: cursorY,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ scale: { duration: 0.2 } }}
            />

            {/* Follower ring */}
            <motion.div
                className="cursor-follower"
                style={{
                    left: followerX,
                    top: followerY,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ scale: { duration: 0.3 } }}
            />
        </>
    );
};

export default CustomCursor;
