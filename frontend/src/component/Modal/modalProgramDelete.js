import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProgramDeleteModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        End Current Program
      </Button>

      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
        <Modal.Header closeButton>
          <Modal.Title>Confirm ending the program</Modal.Title>
        </Modal.Header>
        <Modal.Body>Clicking End Current Program button will reset all the data and let you create a new placement program. Do this action <b>only if you are at the end of the placement program</b> and want to start a new placement program with a new batch of students.
        <br /><br />
        However, data of this program will not be deleted.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
                End Current Program
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProgramDeleteModal;
 