import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Txt from './Txt'
import FullWord from './FullWord'

function App() {


  // width={2941 / 6} height={2770 / 6} 
  //<p>Hello there, I am <Txt txt="Barney Campbell" /> and I am a Computer Science Graduate.</p>
  return (
    <>
        <Navbar location="/" />
        <div className='flex-col'>
            <h1>Home</h1>
            <div className='flex-container'>
                <img  src='../public/Holly.jpg'></img>
                <Txt txt="Hi, my name is Holly and I am a Mathematics and Computer Science graduate. I have a keen interest in software development, web development and game development/design. I created this website to not only display who I am but show what projects I am working on and have worked on. If you have any queries or opportunities feel free to contact me <contact link>."/>
            </div>
        </div>
 
    </>
  )
}

export default App
