
import Navbar from './NavBar.jsx';
import ModalJSX from './Modal.jsx'
import React from "react"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';
import './styles/custom.scss';
import './styles/projects.scss';
import './styles/App.css';

import holly_square from "./assets/pictures/Holly_Logo_Square.png";
import holly_border from "./assets/pictures/Holly_Logo_border.png";
import lollipop from "./assets/pictures/Lollipop.png";


function Projects() {

  const [modalShowPortfolio, setModalShowPortfolio] = React.useState(false);
  const [modalShowLollipop, setModalShowLollipop] = React.useState(false);

  let portfolioTitles = ["Why a Portfolio?", "What did I do?", "Conclusion"];

  let portfoliotext = [<p>I created this website as a way to express myself and show all of the work I have achieved. I have always enjoyed a challenge along with taking the opportunity to learn a new skill when I can. Thus when deciding what to use to create this site in I choose to develop my web development skills by learning React and Bootstrap. Along with this I have taken up a hobby of pixel art and believe this site would be a perfect way to express and therefore all assets are hand drawn.</p>,
                        <p>This project has developed many of my skills as well as gaining new ones. Firstly, my CSS skills hav improved, especially in using CSS libraries such as Bootstrap while incorporating my own styles. A new skill I have acquired is understanding and using APIs. Before this project I had no experience with them, however currently I am training for a triathlon and wanted to show my progress using the Strava API. Secondly I knew I wanted a contact me page on my site and I thought that using EmailJS would be the perfect opportunity for this.</p>,
                        <p>Overall I have had fun learning how React and Bootstrap work together but mostly I am proud of the work I have produced and believe that it represents me.</p>
                      ];

  let lollipopTitles = ["Why this Project?", "What did I do?", "Conclusion"];

  let lollipoptext = [<p>Being a Mathematics and Computer Science Student I choose a project which could incorporate both. I chose to aid in a research project which investigated the time taken for the Lollipop algorithm to complete. This algorithm finds a second Hamiltonian cycle in a degree three graph. The algorithm was created for normal graphs as well as graphs randomly placed edges.</p>,
                       <p>For this project to be able to used, it was hosted built using web technologies and hosted via Google Firebase. My prior experience before this project with web development was little to none so I took this opportunity as a learning experience. I would allow for user input and check to see if a degree 3 graph can be made and if it can the algorithm would then be called. To visualise the graphs and the algorithm I used a JavaScript library called D3.</p>,
                       <p>Overall I am happy with the outcome of the project as well as being able to aid with this research. If you would like to have a play with the site it is: <a target="_blank" href="https://lollipop-algorithm.web.app/">lollipop-algorithm.web.app</a>. For "input own values" I would suggest using nodes: 12 and stepSize: 3 and for "Normal Graph Experiments" use nodes start point: 12 and nodes end point: 100 with node Step Size: 4. (The graphs must have an even amount of nodes).</p>
                      ];

  return (
    <>
      <Navbar location="/programming-projects"/>
      <div className='bg main-body'>
        <Container className='base-container'>
          <Row className='row-proj'>
          <Card mt={"2"} className="first-card" style={{width: "20rem"}}>
            <div className='img-div'>
              <Card.Img className="img-card" variant='top' src={holly_square}/>
            </div>
            <Card.Body className='card-txt-body'>
              <Card.Title>Portfolio Website</Card.Title>
              <Card.Text >
                A Portfolio website about me and my work.
              </Card.Text>
              <Button className="button-project" onClick={() => setModalShowPortfolio(true)} variant="primary">Learn More...</Button>
            </Card.Body>
          </Card>

          <ModalJSX show={modalShowPortfolio} onHide={() => setModalShowPortfolio(false)} title="Portfolio Website" captions={portfolioTitles} imgsrc={holly_border} text={portfoliotext}></ModalJSX>

          <Card className="first-card" style={{width: "20rem"}}>
            <div className='img-div'>
              <Card.Img className="img-card" variant='top' src={lollipop}/>
            </div>
            <Card.Body className='card-txt-body'>
              <Card.Title>Lollipop Algorithm</Card.Title>
              <Card.Text>
                Final year Project on Hamiltonian Graphs.
              </Card.Text>
                <Button className="button-project"  onClick={() => setModalShowLollipop(true)} variant="primary">Learn More...</Button>
            </Card.Body>
          </Card>

          <ModalJSX show={modalShowLollipop} onHide={() => setModalShowLollipop(false)} title="Lollipop Algorithm" captions={lollipopTitles} imgsrc={lollipop} text={lollipoptext}></ModalJSX>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default Projects