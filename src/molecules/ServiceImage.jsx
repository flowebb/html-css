import { motion } from 'motion/react';
import Image from '../atoms/Image';

const ServiceImage = ({ src }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
            >
                <Image src={src} className='  rounded-xl '></Image>
            </motion.div>
        </>
    );
};

export default ServiceImage;
