import Navbar from './NavBar.jsx';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import Strava from './Strava.jsx';
import Password from './Password.jsx';

//import images
import contact_me from "./assets/pictures/contact-img.png"
import holly_swim from "./assets/pictures/holly_swim.png"


import './styles/about.scss'
import './styles/App.css'
import './styles/custom.scss'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { AES, enc } from 'crypto-js';

//ADD timings on the carousel

//encrypted secrets
const enc_clientSecret = "U2FsdGVkX18vJTyidKTXCnsxDIdw3iiNh1oGUsunkaHsWUy4M0qIhZOVBafNnj/kXqMvVG5+A4Yonqn/ZMBV/Q==";
const enc_refreshToken = "U2FsdGVkX19CUKzKm17q6iar8phJ//uyLlIP+W8ipoiygFgKmb+Lx1NBJiITU1pFTXf2SwPvMMR3nHQVIA9CzA==";



function About() {
  const [cookies, setCookie, removeCookie] = useCookies(['strava-secret']);
  let cookiePresent = false;

  if(cookies["strava-secret"] !== undefined) {
    cookiePresent = true;
  }
  
  return (
    <>
        <Navbar location="/about" />
        <div className='bg main-body-contact'>
          <h1 className='about-title'>University & Skills</h1>
          <Carousel className='carousel-size align-items-center bg-about carousel-dark slide'>
            <Carousel.Item pause="hover" className='item-about  align-items-center '>
              <div className='div-carousel'>
                <h2 className='carousel-title'>University</h2>
                <Row>
                  <Col lg="5" md="12" className='left-col-about'>
                    <img className="uni-img" src={contact_me}/>
                  </Col>
                  <Col lg="7" md="12" className='right-col-about'>
                    <p>I chose to take a join degree of Mathematics and Computer Science because I wanted to carry on developing my problem solving skills within maths along with exploring new things within Computer Science. Some of my key modules include multiple Software Engineering Modules, Algorithms Modules and Linear Algebra. By taking Mathematics I was able to incorporate a Mathematical problem in my final year project, where I created a computational solution to a graph theory problem.</p>
                  </Col>
                </Row>
              </div>
              
            </Carousel.Item>
            <Carousel.Item pause="hover" className='item-about' >
            <div className='div-carousel'>
                <h2 className='carousel-title'>Skills</h2>
                <Row>
                <ListGroup className='about-para'>
                  <ListGroup.Item>Teamwork: Working at H&M allowed me to develop this by placing me in an environment that thrives with a strong team.</ListGroup.Item>
                  <ListGroup.Item>Fast Learner: During my final year I undertook a project which required me to learn web development from scratch.</ListGroup.Item>
                  <ListGroup.Item>Independent: I recognize where my knowledge is lacking and I work to develop what is needed. For example, I further enhanced my web dev skills by learning React. As well as taking courses in SQL and AI for python</ListGroup.Item>

                </ListGroup>
                </Row>
              </div>
              
            </Carousel.Item>
          </Carousel>
          <h1 className='about-title'>Hobbies</h1>
          <Carousel className='carousel-size align-items-center bg-about carousel-dark slide'>
            <Carousel.Item  pause="hover" className='item-about'>
              <div className='div-carousel'>
                <h2 className='carousel-title'>Triathlon Training</h2>
                <Row>
                  <Col md="12" lg="5" className='left-col-about'>
                    <img className="uni-img triathlon-img" src={holly_swim}/>
                  </Col>
                  <Col  md="12" lg="7" className='right-col-about'>
                    <p className='triathlon-txt'>After completing University, my goal was to become more active. While at University I mostly swam in the mornings, however I wanted to do more. I took up running and cycling to achieve that. After a while I found I was enjoying all 3 and thought it would be great to push myself for a Triathlon. Currently, my personal records are: </p>
                    <ListGroup className='list-group-card'>
                      <ListGroup.Item>Swimming: 1100m in 40 minutes</ListGroup.Item>
                      <ListGroup.Item>Running: 2.72km in 20 minutes</ListGroup.Item>
                      <ListGroup.Item>Cycling: 18.7km in 30 minutes</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </div>       
            </Carousel.Item>
            <Carousel.Item  pause="hover" className='item-about'>
              <div className='div-carousel'>
                <h2 className='carousel-title'>Reading</h2>
                <Row>
                  <Col md="12" lg="5" className='left-col-about'>
                    <img className="uni-img" src={holly_swim}/>
                  </Col>
                  <Col  md="12" lg="7" className='right-col-about'>
                    <p>My favorite thing to do in the evenings is reading. I have always enjoyed reading as I enjoy picturing the story in my head which is a great way of enhancing my creativity. I mostly read YA/Fansty/Sci Fi, where I have around 100 books to read. </p>
                    <p>My current read is Red, White & Royal Blue by Casey McQuiston</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='div-carousel'>
                <h2 className='carousel-title'>Strava Activity</h2>
                <div className='scrollable-div'>
                  <ListGroup className=''>
                    {cookiePresent
                      ? <Strava dec_clientSecret={AES.decrypt(enc_clientSecret, cookies["strava-secret"].toString()).toString(enc.Utf8)} dec_refreshToken={AES.decrypt(enc_refreshToken, cookies["strava-secret"].toString()).toString(enc.Utf8)} />
                      : <Password />}
                  </ListGroup>
                </div>

              </div>
            </Carousel.Item>

          </Carousel>
        </div>
    </>
  )
}

export default About