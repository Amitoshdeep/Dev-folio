import React ,{useState, useEffect } from 'react'
import { NavLink , useLocation } from 'react-router-dom'

// Importing Icons
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// Importing Components
import TextType from '../reactBitz/TextType';

const myLinks = [
  {icon: <FaGithub/>, url: "https://github.com/Amitoshdeep"},
  {icon: <FaLinkedin/>, url: "https://www.linkedin.com/in/amitoshdeep/"},
  {icon: <RiInstagramFill/>, url: "https://www.instagram.com/lowkeylazyy/"},
  {icon: <FaYoutube/>, url: "https://www.youtube.com/@Luv2Lag"},
]

function Navbar() {

  const loc = useLocation();
  const [navActive, setNavAct] = useState(true);

  useEffect(() => {
    // console.log("Location changed:", loc.pathname);
    if(loc.pathname === '/'){
      setNavAct(true)
    }
    else{
      setNavAct(false)
    }
  }, [loc.pathname]);

  return (
    <div className={`p-4 duration-300 text-stone-400
      flex
    ${navActive ? "pl-20 flex-col gap-5 justify-center h-full" : "justify-between p-4 px-10"}`} >

      {/* Just intro Lol */}
      <p className={`text-3xl ${navActive ? "block" : "hidden"}`} >
        Hey, there! 👋
      </p>

      {/* Name */}
      <p className={`flex gap-3 text-4xl font-playFair`}>

        <span className={`${navActive? "block ": "hidden" }`}>  I'm </span>

        <span className='text-stone-300'>
          <strong> Amitoshdeep Singh </strong>
        </span>

      </p>

      {/* TextType */}
      <div className={`text-stone-400 gap-2 text-2xl ${navActive ? "flex" : "hidden"}`}>
        <p>a </p>
        <div className='relative overflow-hidden italic'>
          <TextType
            text={[
              "Web Developer",
              "Frontend Enthusiast",
              "Tech Geek",
              "Problem Solver",
              "Full Stack Aspirant",
              "Lifelong Learner",
              "Student!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={`default Lol`}
          />
          {/* Bottom Line */}
          <div className='absolute bottom-0 right-5 h-[1px] w-full accent-bg'></div>

        </div>
      </div>

      {/* Navigation */}
      <ul className='flex gap-4 text-lg h-7'>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar ${isActive ? "active" : ""}`
          }
        >
          Home
          <div className='underNav'></div>
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            `navbar ${isActive ? "active" : ""}`
          }
        >
          About
          <div className='underNav'></div>
        </NavLink>

        <NavLink
          to="/Resume"
          className={({ isActive }) =>
            `navbar ${isActive ? "active" : ""}`
          }
        >
          Resume
          <div className='underNav'></div>
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `navbar ${isActive ? "active" : ""}`
          }
        >
          Contact
          <div className='underNav'></div>
        </NavLink>
      </ul>

      {/* here CUM's my Links ;) */}
      <div className={`gap-3.5 cursor-pointer p-1
        ${navActive ? "flex" : "hidden"}
      `}>

        {myLinks.map( (link, index) =>(

          <div
          className='p-2 accent duration-300 hover:scale-[1.2] bg-stone-900 rounded-full '
          key={index}
          onClick={()=>window.open(link.url)}>

            {link.icon}
          </div>

        ) )}

      </div>


    </div>
  )
}

export default Navbar
