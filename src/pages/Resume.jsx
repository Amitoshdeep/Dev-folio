import React from 'react';
import {motion} from 'framer-motion';

// Importing Components
import Heading from '../components/Heading';

function Resume() {
  return (
    <motion.div
      className='h-full w-full flex justify-center items-center p-4'
      initial={{ opacity: 0, y: 100 }}   // Start slightly below
      animate={{ opacity: 1, y: 0 }}    // Animate to original position
      exit={{ opacity: 0, y: 50 }}      // Fade out while moving down
      transition={{ duration: 1.8 }}
    >
      <div className='h-full bg-black/50 w-5/6'>
        {/* Your content here */}

        <div className=''>
          <Heading title="RESUME" subHead="CHECK MY RESUME"/>
        </div>



      </div>
    </motion.div>
  )
}

export default Resume
