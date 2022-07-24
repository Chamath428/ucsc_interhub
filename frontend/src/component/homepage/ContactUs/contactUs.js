import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PrimaryButton from '../PrimaryButton/primaryButtonClass';

class ContactUs extends Component {
   

    render() { 
        return (
            <Container className="mt-5 mb-5">
                <Row className="d-flex flex-row justify-content-around align-items-center">
                    <Col lg='5'>
                        <h1>Contact Information</h1>
                        <p>Still got problems? Do not hesitate to give us a call or send us a contact form message</p>
                        <p><i className="bi bi-geo-alt" style={{color:'#0d6efd'}}></i>  Thibirigasyaya, Raid Avenue, UCSC</p>
                        <p><i className="bi bi-telephone" style={{color:'#0d6efd'}}></i> <a class="turquoise" href="tel:003024630820" style={{textDecoration: 'none'}}>  +81 720 2212</a></p>
                        <p><i className="bi bi-envelope" style={{color:'#0d6efd'}}></i>  <a class="turquoise" href="mailto:office@evolo.com" style={{textDecoration: 'none'}}>  office@evolo.com</a></p>
                    </Col>
                    <Col lg='5'>
                    <Form>
                         <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="IndexNumber" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Message" rows={3} />
                        </Form.Group>
                        <div className="d-grid">
                        <PrimaryButton inside={'Submit'}></PrimaryButton>
                        </div>
                    </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default ContactUs;