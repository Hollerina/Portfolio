import React from "react"
import Navbar from './NavBar.jsx';
import {
  Form,
  Col,
  Button,
  Row,
  Container
} from "react-bootstrap"

import contact from "./assets/pictures/contact-img.png";

import "./styles/contact.scss"
import './styles/App.css'
import './styles/custom.scss'


const initialFormData = Object.freeze({
  username: "",
  email: "",
  query: "",
  subject: ""
});


function Contact() {
  const [formData, updateFormData] = React.useState(initialFormData);

  const sendFeedback = (serviceID, templateId, variables) => {
      window.emailjs.send(
          serviceID, templateId,
          variables
      ).then(res => {
          console.log('Email successfully sent!')
      })
          .catch(err => console.error('There has been an Error.', err))
  }

  const handleChange = (e) => {
      updateFormData({
        ...formData,

        [e.target.name]: e.target.value.trim()
      });
    };

  const handleSubmit = (e) => {
      e.preventDefault()
      alert(`Thank you for your message. Your query has been forwarded.`);
      const templateId = 'template_cb7vw8s';
      const serviceID = "service_w28xshj";
      sendFeedback(serviceID, templateId, { from_name: formData.name, message_html: formData.query, subject:formData.subject, email: formData.email })
      e.target.reset();

      console.log(formData);
    };


  return (
    <>
        <Navbar location="/contact-me" key="4"/>
        <Container fluid className='bg main-body contact'>
          <Row className="align-items-center main-body contact-row">
            <Col className="left-col-contact">
                <img className="contact-img" src={contact}/>
            </Col>
            <Col className="right-col-contact contact-right">
              <Form>
                <Row>
                  <Form.Group as={Col} controlId='formGridName'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Email Address"/>
                  </Form.Group>
                </Row>
                <Form.Group className="margin-contact" as={Col} controlId='formGridSubject'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control onChange= {handleChange} name="subject" type="subject" placeholder="Subject"/>
                  </Form.Group>
                <Form.Group className="margin-contact" as={Col} controlId='formGridQuery'>
                  <Form.Label>Query</Form.Label>
                  <Form.Control className="query" onChange= {handleChange} name="query" as="textarea" placeholder="Message"/>
                </Form.Group>
                <div className="button-div margin-contact">
                  <Button className="button-contact" onClick={handleSubmit} variant='primary' type="submit">Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>
          
        </Container>
    </>
  )
}

export default Contact