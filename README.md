```js
import React from 'react';
import {motion} from 'framer-motion'

const Simpe = () => {
    return (
        <motion.div 
        className='bg-[red] w-[100px] h-[100px] rounded-full'
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1}}
        >    
        </motion.div>
    );
};

export default Simpe;
```

```js
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

```
```js
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
```
```js
import React from 'react';
import {motion} from 'framer-motion'

const Trasitiontype= () => {
    
    return (
        <>
           <motion.div
                className="m-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                <h1>Learning Animation</h1>
                <p>
                    We Love Animation. We are Enjoying it a lot. Framer Motion is great.
                </p>
            </motion.div>
            {/* // type spring... */}
            <motion.div
                className="m-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', duration: 2 }}
            >
                <h1>Learning Animation</h1>
                <p>
                    We Love Animation. We are Enjoying it a lot. Framer Motion is great.
                </p>
            </motion.div>
            {/* spring and bounce */}
            <motion.div
                className="m-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', bounce:0.8, duration: 2 }}
            >
                <h1>Learning Animation</h1>
                <p>
                    We Love Animation. We are Enjoying it a lot. Framer Motion is great.
                </p>
            </motion.div>
        </>
    );
};



export default Trasitiontype;
```
```js
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

export default function App() {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);
  useEffect(() => {
    const animation1 = animate(count, 20, { duration: 5 });
    return animation1.stop;
  }, [count]);
  return (
    <div className="text-3xl container m-auto mt-2">
      <motion.div className="text-xl border rounded-md grid place-items-center border-gray-400 size-20">
        {roundedValue}
      </motion.div>
    </div>
  );
}
```
```js
import { motion } from "motion/react";

const Box = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="size-40 flex items-center justify-center border border-gray-400 bg-pink-500 text-white"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};

export default function App() {
  const greeting = [
    "Hello",
    "Boss",
    "Bangladesh",
    "Best",
    "Hello",
    "Boss",
    "Bangladesh",
    "Best",
  ];
  return (
    <div className="text-3xl container space-y-2 m-aut0">
      {greeting.map((item, idx) => (
        <Box key={idx} text={item} />
      ))}
    </div>
  );
}

```
