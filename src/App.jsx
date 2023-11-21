import { useState } from 'react'
import './styles//App.css'
import './styles/custom.scss'
//Import dependencies for grid using react bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Importing images
import Holly_App from "./assets/pictures/Holly_App_Simple.png"

import Navbar from './NavBar.jsx';

function App() {

  return (
    <>
      <Navbar location="/" key="1"/>
      <div className='bg'>
        <Container fluid className='main-body '>
          <div className='bg-size  bg-container  center'>
            <Row className='row-app  align-items-center  align-content-stretch justify-content-start'>
              
                <Col sm="12" md="12" lg="6" className='col-body deep-blue-gradient left-col'  >
                    <img  className="app-img" src={Holly_App} width="490.1667" height="461.6667"/>
                </Col>
                <Col sm="12" md="12" lg="6" className='col-body deep-blue-gradient right-col  '>
                  <div className='heading'>
                    <Row className=''>
                      <h1 className='title-home'>Hi, I'm Holly</h1>
                    </Row>
                    <Row className=''>
                      <p className='paragraph-home'>I am young software developer based in London Area. My main interests are Web Development, Game Development and software Development. I am most familiar with the following languages:</p>
                    </Row>
                    <Row>
                      <ul className='paragraph-home'>
                        <li className='li-home'>
                          JavaScript
                        </li>
                        <li className='li-home'>
                          Java
                        </li>
                        <li className='li-home'>
                          Python
                        </li>
                        <li className='li-home'>
                          C#
                        </li>
                      </ul>
                    </Row>
                  </div>
                </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
