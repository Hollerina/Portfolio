
import Navbar from './NavBar.jsx';
import ModalArtJSX from './ModalArt.jsx'
import React from "react"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Modal, Row } from 'react-bootstrap';

//Image Imports
import doughnut from "./assets/pictures/Donut.png";
import egg from "./assets/pictures/Egg.png";
import pretzel from "./assets/pictures/Pretzel.png";
import sushi from "./assets/pictures/Maki_Sushi.png";
import Logo from "./assets/pictures/Holly_Logo.png";
import Long_long from "./assets/pictures/Holly_Logo_Long_exp.png";
import Background from "./assets/pictures/Background.png";
import contact from "./assets/pictures/contact-img.png";
import container from "./assets/pictures/container_backgrounds.png";
import food_cover from "./assets/pictures/food_art_cover.png";
import holly_square from "./assets/pictures/Holly_Logo_Square.png";

import './styles/projects.scss';
import './styles/App.css';
import './styles/custom.scss';

function ArtProj() {
  const [modalShowPixelFood, setModalShowPixelFood] = React.useState(false);
  const [modalShowAssets, setModalShowAssets] = React.useState(false);

  let imgarr = [doughnut, egg, pretzel, sushi];
  let imglabel = ["Doughnut", "Egg", "Pretzel", "Maki-Sushi"];

  let imgArrAssets  = [Logo, Long_long, Background, contact, container];
  let imgLabelAssets = ["Logo", "Long Logo", "Background", "Contact Image", "Container Background"];


  return (
    <>
      <Navbar location="/programming-projects"/>
      <div className='bg main-body'>
        <Container className='base-container'>
          <Row className='row-proj'>
          <Card mt={"2"} className="first-card" style={{width: "20rem"}}>
            <div className='img-div'>
              <Card.Img className="img-card" variant='top' src={food_cover}/>
            </div>
            <Card.Body className='card-txt-body'>
              <Card.Title>Food Pixel Art</Card.Title>
              <Card.Text>
                Pixel Art practice of food.
              </Card.Text>
              <Button className="button-project" onClick={() => setModalShowPixelFood(true)} variant="primary">See More...</Button>
            </Card.Body>
          </Card>

          <ModalArtJSX show={modalShowPixelFood} onHide={() => setModalShowPixelFood(false)} title="Pixel Food" imgs={imgarr} labels={imglabel}></ModalArtJSX>

          <Card mt={"2"} className="first-card" style={{width: "20rem"}}>
            <div className='img-div'>
              <Card.Img className="img-card" variant='top' src={holly_square}/>
            </div>
            <Card.Body className='card-txt-body'>
              <Card.Title>Portfolio Main Assets</Card.Title>
              <Card.Text>
                Assets for this portfolio website.
              </Card.Text>
              <Button className="button-project" onClick={() => setModalShowAssets(true)} variant="primary">See More...</Button>
            </Card.Body>
          </Card>

          <ModalArtJSX show={modalShowAssets} onHide={() => setModalShowAssets(false)} title="Pixel Food" imgs={imgArrAssets} labels={imgLabelAssets}></ModalArtJSX>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default ArtProj