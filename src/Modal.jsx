import { Col, ListGroup, Modal, Row } from 'react-bootstrap';

import './styles/projects.scss';
import './styles/App.css';
import './styles/custom.scss';


function ModalJSX(props){
    
    return(
        <Modal {...props} size="xl" centered className='modals'>
        <Modal.Header  closeButton className='modal-header'>
          <Modal.Title className='modal-title'>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
            <Row>
                <Col md = "5" className='left-modal'>
                    <img src={props.imgsrc} className="img-size"/>
                </Col>
                <Col md ="7" className='right-modal'>
                    <ListGroup variant="flush" className='list-group-modal'>
                    {
                        props.text.map((data, key) =>{
                            return(
                                <ListGroup.Item key={key} className='list-group-modal'>
                                    <h3 className='modal-title-h3'>{props.captions[key]}</h3>
                                    {data}
                                </ListGroup.Item>
                            )
                        })
                    }
                    </ListGroup>
                </Col>
            </Row>
        </Modal.Body>
      </Modal>
    )
}

export default ModalJSX