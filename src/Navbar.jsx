import { Link } from 'react-router-dom'
import './App.css'

function Navbar(props) {
    const pages = ["/", "/about", "/projects"];
    const names = ["Home", "About me", "Projects"];
    const links = [];

    for(let [index, page] of pages.entries()) {
        if(props.location == page) {
            links.push(<Link className='nav-style on-page' key={index} to={page}>{names[index]}</Link>);
        }
        else {
            links.push(<Link className='nav-style links' key={index} to={page}>{names[index]}</Link>);
        }
    }

    return (
        <nav className="navigation-bar">
            {links.map((component) => ( component ))}
        </nav>
    )
}

export default Navbar