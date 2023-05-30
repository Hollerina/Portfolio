import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <h1>Barney</h1>
    </>
  )
}

export default Projects
