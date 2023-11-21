/**
 * To create the base of the website using React and ReactDom
 */

//Import React along with elements from ReactDom
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
//Import the pages which will be on the site
import App from './App.jsx'

import './styles/index.css'
import './styles/custom.scss'
import About from './About.jsx'
import Projects from './Projects.jsx'
import ArtProj from './ArtProj.jsx'
import Contact from "./Contact.jsx"

//The root creation where each element is added onto/branched off
/**
 * BrowserRouter: stores the current location in the broswers address
 * Routes: Will match a set of child routes to the current location
 * Route: Create a Route which will be the URL and point to what will be displayed
 */
ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/programming-projects" element={<Projects />}></Route>
          <Route path="/pixel-art-projects" element={<ArtProj />}></Route>
          <Route path="/contact-me" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>,

)
