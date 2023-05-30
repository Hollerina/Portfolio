import { Link } from 'react-router-dom'
import './App.css'

function Navbar() {
    return (
        <nav className="navigation-bar">
            <Link className="links" to="/" >Home</Link>
            <Link className="links" to="/about">About Me</Link>
            <Link className="links" to="/projects">Projects</Link>
        </nav>
    )
}

export default Navbar