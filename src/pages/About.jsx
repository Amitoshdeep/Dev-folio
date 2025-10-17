import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Importing Components
import Heading from '../components/Heading';

function About() {
  const [age, setAge] = useState({});

  useEffect(()=>{
    const birthDate = new Date("2006-08-18T00:00:00"); // Replace with your DOB

    function updateAge() {
      const now = new Date();
      const ageInMs = now - birthDate;
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

      const ageIn1 = ageInYears.toFixed(1);
      const ageIn9 = ageInYears.toFixed(9);

      setAge({
        oneDecimal: ageIn1,
        nineDecimal: ageIn9
      })

    }

    updateAge(); // Initial call
    const interval = setInterval(updateAge, 100);
    return () => clearInterval(interval);

  },[]);

  return (
    <motion.div
      className='h-full w-full flex justify-center items-center p-4'
      initial={{ opacity: 0, y: 100 }}   // Start slightly below
      animate={{ opacity: 1, y: 0 }}    // Animate to original position
      exit={{ opacity: 0, y: 50 }}      // Fade out while moving down
      transition={{ duration: 1.8 }}
    >
      <div className='h-full bg-black/50 w-5/6 flex flex-col p-4 rounded-lg text-stone-400'>
        {/* Your content here */}

        {/* Heading */}
        <div className='h-max'>
          <Heading title="ABOUT" subHead="More about me"/>
        </div>

        {/* About me */}
        <div className='min-h-1/2 w-full flex'>

          {/* img div */}
          <div className=' w-2/6 flex justify-center items-center grayscale-100'>
            <img src="/imgs/me.png" alt="Me" className='object-cover h-2/3' />
          </div>

          {/* Information */}
          <div className='flex w-2/3 text-lg flex-col gap-6'>
            {/* Fake Job title LOL */}
            <h2 className='text-3xl font-bold accent'>
              Full Stack Developer in Making
            </h2>

            <p>I Write, Test, Commit... and debug (more than I'd like to admit 😂)</p>

            <p>I’m <span class="accent">Amitoshdeep Singh</span>, an <span>{age.oneDecimal}</span>-year-old <span class="accent">BCA</span> student with a growing passion for technology and software development. My journey started with a fascination for how apps and systems work, and now I'm diving deeper into coding, problem-solving, and exploring real-world tech.</p>
            <p>Currently, I’m actively learning <span class="accent">full-stack development</span>, <span class="accent">cloud computing</span>, and <span class="accent">DevOps</span> practices. While I’m still early in my journey, I’m driven by a strong curiosity and love experimenting with new tools and technologies.</p>
            <p>My goal is to build secure, scalable, and user-friendly applications that make an impact. Always learning, always building. 💻🚀</p>

          </div>


        </div>


      </div>
    </motion.div>
  );
}

export default About;
