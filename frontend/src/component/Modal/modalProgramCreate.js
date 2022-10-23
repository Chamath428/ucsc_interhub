import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap'
import { callServer } from '../../pages/authServer'
import Alert from 'react-bootstrap/Alert'

function ProgramCreateModal() {
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
        variant="primary"
        active
        className="float-right mr-4"
        onClick={handleShow}
      >
        + Create New Placement Program
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
          <Modal.Title>Create a new placement program</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-4">
          This action will reset the system to default status and let you add
          the new batch of students. However, existing companies will stay on
          the system.
          <br />
          <Form onSubmit={createNewPlacementPrograme}>
            <div>
              <Form.Group className="mt-3" controlId="programStartDate">
                <Form.Label>Start Date</Form.Label>
                <Row>
                  <Col lg="4">
                    <Form.Control
                      onChange={(event) => {
                        setDate(event.target.value)
                      }}
                      type="date"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mt-3 pr-5" controlId="notifyCompanies">
                <Form.Check
                  type="checkbox"
                  label="Notify companies about new industrial placement program"
                />
              </Form.Group>
            </div>
            <hr />
            <Row className="float-right ">
              <Col className="mt-1">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>{' '}
                <Button variant="primary" type="submit"onClick={handleClose} >
                  Create New Program
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

export default ProgramCreateModal
