import React , {useState, useEffect} from 'react'
import { Routes, Route} from 'react-router-dom'

// Importing pages test
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

// Importing components
import ClickSpark from './reactBitz/ClickSpark'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

// For Color Toggle
const colors = ['#f87171', '#fb923c', '#f472b6', '#34d399', '#60a5fa']

function App() {
  // Colors
  const [colorIndex, setColorIndex] = useState(0)

  // Update CSS variable whenever color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', colors[colorIndex])
  }, [colorIndex])

  // Cycle to the next color
  const nextColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
  }

  return (
    <div
    className='h-screen w-screen
    bg-[url(/imgs/bgMe.webp)] bg-right-top
    overflow-x-hidden
    text-xl font-lato
    relative cursor-default
    '>
    <ClickSpark
        sparkColor={colors[colorIndex]}
        sparkSize={12}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <Navbar/>
        <ScrollToTop />

        <Routes>

          <Route path='/' element={<Home/> } />
          <Route path='/About' element={<About/> } />
          <Route path='/Resume' element={<Resume/> } />
          <Route path='/Contact' element={<Contact/> } />


        </Routes>


        <div className='
          fixed bottom-4 right-7
          flex gap-3 cursor-pointer
          justify-center items-center
          bg-black/50 backdrop-blur-md
          px-3 py-2 rounded-4xl
          '

          onClick={nextColor}
        >
          {/* Circle For Color */}
          <div className='w-5 aspect-square rounded-full border-2 border-gray-500/30 accent-bg'>
          </div>

          <p className='accent text-sm
          '>いろ</p>

        </div>


      </ClickSpark>

      {/* TEMPELATE FOR COLORS */}
      {/* <div className='p-6'>
        <h1 className='accent text-3xl'>Hello, site!</h1>
        <button className='accent-bg px-4 py-2 rounded mt-4'>Accent Button</button>

        <div className='flex flex-col gap-3'>
          {Object.keys(colors).map((color) => (
            <div
              key={color}
              className={`w-5.5 aspect-square rounded-full cursor-pointer border-2 border-gray-400`}
              style={{ backgroundColor: colors[color] }}
              onClick={() => setAccent(color)}
            ></div>
          ))}
        </div>

        <button className="accent-bg px-4 py-2 rounded mb-4" onClick={nextColor}>
          Change Color
        </button>
      </div> */}

    </div>

  )
}

export default App
