import { Container } from 'react-bootstrap';
import './styles/App.css'
import './styles/custom.scss'
//Importing from react-boostrap to allow for boostraps nav to be used with react
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import holly_nav from "./assets/pictures/Holly_Logo_Long.png";


function NavbarBS(props) {
    //Use spacing and flex for spacing of nav bar
    
    /**
     * Navbar: Wraps around the entire navbar
     * Navbar-Collapse: Allows for collapsation
     * Nav: Wraps around the elements which will be in the nav bar
     * Nav.Link: Links to the correct page and when clicked will direct there
     * NavDropdown: Symbolises this element will be a dropdown element
     * NavDropdown.Item: What will be in the drop down
     */
    return (
        <Navbar style={{paddingBottom: "0", paddingTop: "0"}} className='navbar-dark' id="navbar" collapseOnSelect expand="lg" fluid sticky="top">
            <Container className='justify-content-space-between'>
            <Navbar.Brand href="#home">
            <img  src={holly_nav} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
                <Navbar.Collapse id="responsive-navbar-nav">
                
                    <Nav activeKey={props.location} className='justify-content-end flex-grow-1 pe-3'>
                        <Nav.Link href='/' >Home</Nav.Link>
                        <Nav.Link href='/about' >About Me</Nav.Link>
                        <NavDropdown title="Projects" >
                            <NavDropdown.Item href='/programming-projects' >Programming Projects</NavDropdown.Item>
                            <NavDropdown.Item href='/pixel-art-projects' >Pixel Art Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/contact-me' >Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarBS