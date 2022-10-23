import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirmation(props){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <Button variant={props.ButtonColour} active className='float-right mr-4'  onClick={handleShow}>
    {props.ButtonText}
    </Button>{' '}

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.Body}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Back
              </Button>
              <Button variant={props.PrimaryButtonColour}onClick={handleClose}>
                {props.PrimaryButton}
              </Button>
            </Modal.Footer>
    </Modal>
    </>
  );
}

export default ModalConfirmation;


