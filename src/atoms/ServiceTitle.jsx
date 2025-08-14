import { motion } from 'motion/react';
const ServiceTitle = ({
    children,
    y,
    delay,
    textSize,
    textColor = 'text-white',
    fontWeight = 'font-bold',
}) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay }}
            className={`${textSize} ${textColor} ${fontWeight}`}
        >
            {children}
        </motion.h1>
    );
};

export default ServiceTitle;
