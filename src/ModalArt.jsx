import { Col, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';

import './styles/projects.scss';
import './styles/App.css';
import './styles/custom.scss';

/**
 * Loop through the given images and add them onto the modal
 */

function ModalArtJSX(props){
    
    return(
        <Modal {...props} size="xl" centered className='modals'>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='flex-img'>
                {props.imgs.map((data, key) => {
                    return(
                        <figure className='figure-modal'>
                            <img src={data} className={key + " figure-modal-img"}/>
                            <figcaption>{props.labels[key]}</figcaption>
                        </figure>
                    )
                })}
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default ModalArtJSX