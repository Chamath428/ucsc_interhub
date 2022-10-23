import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap'
import { callServer } from '../../pages/authServer'
import Alert from 'react-bootstrap/Alert'

function NextPhaseModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [alertPara, setAlertPara] = useState('create Successfully!')
  const [variant, setVariant] = useState('success')

  const [date, setDate] = useState('')

  const createNewPlacementPrograme = (event) => {
    event.preventDefault()

    const data = {
      start_date: date,
      email_address: 'coordinator@g.com',
    }

    const authRequest = {
      method: 'post',
      url: 'coordinator/createNewPlacementPrograme',
      data: data,
    }
    callServer(authRequest)
      .then((response) => {
        showAlert(response)
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara('Something went wrong when creating the placement!')
          setVariant('danger')
          setShow(true)
        }
      })
  }
  const showAlert = (response) => {
    setAlertPara('Placement added Successfully!')
    setVariant('success')
    setShow(true)
  }

  return (
    <>
      <Button
        variant="success"
        active
        className="float-right mr-4"
        onClick={handleShow}
      >
        <i class="bi bi-arrow-right-circle mr-2"></i>
        Go to next Phase
      </Button>{' '}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Alert
          variant={variant}
          show={show}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>{alertPara}</Alert.Heading>
        </Alert> */}
        <Modal.Header closeButton>
          <Modal.Title>Proceed to the next Step of the program</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-4">
          Click confirm to proceed to the next step of the program.
          <br />
          <Form>
            <div>
              <Form.Group className="mt-3" controlId="">
                <Form.Label>Choose the Phase</Form.Label>
                <Row>
                  <Col lg="4">
                    <Form.Select aria-label="Default select example">
                        <option>Select the next phase</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mt-3 pr-5" controlId="notifyCompanies">
                <Form.Check
                  type="checkbox"
                  label="Notify companies about next phase"
                />
              </Form.Group>
            </div>
            <hr />
            <Row className="float-right ">
              <Col className="mt-1">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>{' '}
                <Button variant="primary" type="submit"  onClick={() => window.location.reload(false)} >
                  Go to next phase
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
          

          
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default NextPhaseModal;
