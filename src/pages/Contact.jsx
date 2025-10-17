import React from 'react';
import {motion} from 'framer-motion';

// Importing Components
import Heading from '../components/Heading';
function Contact() {
  return (
    <motion.div
      className='min-h-screen w-full flex justify-center items-start p-4 pb-10'
      initial={{ opacity: 0, y: 100 }}   // Start slightly below
      animate={{ opacity: 1, y: 0 }}    // Animate to original position
      exit={{ opacity: 0, y: 50 }}      // Fade out while moving down
      transition={{ duration: 1.8 }}
    >
      <div className='w-full max-w-7xl flex flex-col bg-black/90 p-6 pb-16 rounded-lg text-stone-400 gap-10'>
        {/* Your content here */}

        <div className=''>
          <Heading title="CONTACT" subHead="CONTACT ME"/>
        </div>

      </div>
    </motion.div>
  )
}

export default Contact
