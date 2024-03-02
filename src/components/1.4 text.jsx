import React from 'react';
import {motion} from 'framer-motion'

const Text = () => {
    const message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem"
    const  messagearray=message.split(" ")
    return (
        <div className='text-xl font-bold'>
            {messagearray.map((word,index)=>{
                return <motion.span key={index}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration:1,
                    delay:index/20
                }}
                
                >
                    {word} {" "}
                </motion.span>
            })}
        </div>
    );
};

export default Text;