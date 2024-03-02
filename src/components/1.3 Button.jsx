import React from 'react';
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <div className='flex gap-10'>
            <motion.button className='bg-[green] text-white py-2 px-3 rounded-md'
            whileTap={{scale:0.5}}
            whileHover={{scale:1.4}}
            transition={{duration:0.5}}
            >Click me</motion.button>
            {/* second button */}
            <motion.button className='bg-[green] text-white py-2 px-3 rounded-md'
            whileTap={{scale:0.5}}
            whileHover={{
                scale:1.4,
                transition:{yoyo:Infinity}
            }}
            >Click me</motion.button>
        </div>
    );
};

// whileTap={{scale:0.5}}

export default Button;