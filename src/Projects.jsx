import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

import './App.css'


function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar location="/projects" />
        <h1>Barney</h1>
    </>
  )
}

export default Projects
