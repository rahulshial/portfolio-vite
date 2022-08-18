import React, { useState } from 'react'
import './App.css'
import { Navbar } from '@components/Navbar/Navbar'
import About from '@components/About/About'
import Experience from '@components/Experience/Experience'
import Projects from '@components/Projects/Projects'
import Contact from '@components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />

    </>
  )
}

export default App
