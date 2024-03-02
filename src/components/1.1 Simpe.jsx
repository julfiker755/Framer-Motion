import React from 'react';
import {motion} from 'framer-motion'

const Simpe = () => {
    return (
        <motion.div 
        className='bg-[red] w-[100px] h-[100px]'
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{duration:5}}
        >    
        </motion.div>
    );
};

export default Simpe;