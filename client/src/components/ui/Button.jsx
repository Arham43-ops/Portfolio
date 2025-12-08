import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    icon,
    onClick,
    href,
    ...props
}) => {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            className={`btn btn-${variant}`}
            onClick={onClick}
            href={href}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            {...props}
        >
            <span>{children}</span>
            {icon && <span className="btn-icon">{icon}</span>}
        </Component>
    );
};

export default Button;
