import { motion } from 'motion/react';
const Title = ({ children, y, delay, textSize, fontWeight = 'font-bold' }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay }}
            className={`${textSize} text-white ${fontWeight}`}
        >
            {children}
        </motion.h1>
    );
};

export default Title;
