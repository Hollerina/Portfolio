import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
		<Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
        </Routes>
    </BrowserRouter>,
)
