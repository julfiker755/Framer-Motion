import React from 'react';
import {motion} from 'framer-motion'

const Keyframes = () => {
    return (
        <motion.div 
        className='bg-[#31d1a4] w-32 h-32 border'
        animate={{
            borderRadius:["20%","20%","50%","50%","20%"],
            rotate:[0,90,180,270,0],
            scale:[1,1,2,2,1]
        }}
        transition={{
            duration:1.7
        }}
        
        >    
        </motion.div>
    );
};

export default Keyframes;
