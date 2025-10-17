import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Importing Components
import Heading from '../components/Heading';
import InfiniteScroll from '../reactBitz/InfiniteScroll';
import LogoLoop from '../reactBitz/LogoLoop';

// Importing Icons
import { IoIosArrowForward } from "react-icons/io";
import { FaHtml5, FaCss3, FaReact, FaNode, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiMongodb } from "react-icons/di";

const items = [
  { content: <><FaHtml5 className='accent'/> HTML5</> },
  { content: <><FaCss3 className='accent'/> CSS3</>  },
  { content: <><IoLogoJavascript className='accent'/> JavaScript (ES6+)</> },
  { content: <><FaReact className='accent'/> React.js</> },
  { content: <><RiNextjsFill className='accent'/> Next.js</> },
  { content: <><SiTypescript className='accent'/> TypeScript</> },
  { content: <><RiTailwindCssFill className='accent'/> Tailwind CSS</> },
  { content: <><FaNode className='accent'/> Node.js</> },
  { content: <><SiExpress className='accent'/> Express.js</> },
  { content: <><DiMongodb className='accent'/> MongoDB </> },
  { content: <><FaGithub className='accent'/> Git & GitHub</> },
  { content: "Responsive Design" },
  { content: "RESTful APIs" },
  { content: "Problem Solving / Algorithms" },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaNode />, title: "Node js", href: "https://nodejs.org/en" },
  { node: <FaReact />, title: "React", href: "https://react.dev/" },
  { node: <FaGithub />, title: "Github", href: "https://github.com/" },
  { node: <DiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
];

function About() {
  const [age, setAge] = useState({});

  // DOB Calc
  useEffect(() => {
    const birthDate = new Date("2006-08-18T00:00:00"); // Replace with your DOB

    function updateAge() {
      const now = new Date();
      const ageInMs = now - birthDate;
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

      setAge({
        oneDecimal: ageInYears.toFixed(1),
        nineDecimal: ageInYears.toFixed(9),
      });
    }

    updateAge(); // Initial call
    const interval = setInterval(updateAge, 100);
    return () => clearInterval(interval);
  }, []);

  const ulData = [
    { title: "Age", data: age.nineDecimal },
    { title: "Degree", data: "BCA Undergrad" },
    { title: "Website", data: "You're already here!" },
    { title: "Email", data: "amitosh.dev@outlook.com" },
  ];

  return (
    <motion.div
      className='min-h-screen w-full flex justify-center items-start p-4 pb-10'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.8 }}
    >
      <div className='w-full max-w-7xl flex flex-col bg-black/95 p-6 pb-16 rounded-lg text-stone-400 gap-10'>

        {/* Heading */}
        <Heading title="ABOUT" subHead="More about me" />

        {/* About me section */}
        <div className='flex flex-col md:flex-row gap-6'>
          {/* Image */}
          <div className='w-full md:w-2/6 flex justify-center items-center grayscale'>
            <img src="/imgs/me.png" alt="Me" className='object-cover h-64 md:h-2/3 rounded-lg' />
          </div>

          {/* Information */}
          <div className='flex flex-col w-full md:w-4/6 gap-4 text-lg'>
            <h2 className='text-3xl font-bold accent'>
              Full Stack Developer in Making
            </h2>

            <p>I Write, Test, Commit... and debug (more than I'd like to admit 😂)</p>

            <p>
              I’m <span className="accent">Amitoshdeep Singh</span>, an <span>{age.oneDecimal}</span>-year-old <span className="accent">BCA</span> student with a growing passion for technology and software development. My journey started with a fascination for how apps and systems work, and now I'm diving deeper into coding, problem-solving, and exploring real-world tech.
            </p>

            <p>
              Currently, I’m actively learning <span className="accent">full-stack development</span>, <span className="accent">cloud computing</span>, and <span className="accent">DevOps</span> practices. While I’m still early in my journey, I’m driven by a strong curiosity and love experimenting with new tools and technologies.
            </p>

            <p>
              My goal is to build secure, scalable, and user-friendly applications that make an impact. Always learning, always building. 💻🚀
            </p>

            {/* Info List */}
            <ul className='flex flex-wrap gap-2'>
              {ulData.map((list, index) => (
                <li key={index} className='flex gap-2 w-1/2 items-center'>
                  <IoIosArrowForward className='accent' />
                  <span className='font-bold'>{list.title}</span>: {list.data} {list.title === 'Age' ? `years` : ``}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills / Infinite Scroll */}
        <div className='flex flex-col gap-4 overflow-auto'>
          <Heading title="Skills"/>
          <div className='h-64 md:h-80 w-full'>
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.7}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
        </div>

        {/* Tech Interests / Logo Loop */}
        <div className='flex flex-col gap-10'>
          <Heading title="Tech Interests"/>
          <div className='h-24 relative overflow-hidden'>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology partners"
            />
          </div>
          <div className='h-24 relative overflow-hidden'>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="right"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology partners"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default About;
