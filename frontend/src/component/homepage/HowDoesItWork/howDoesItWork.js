import React, { Component } from 'react';
import HomeCard from '../HomeCard/homeCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './howDoesItWorkStyles.css'


const cardTitle = ['Student','PDC','Organization'];
const cardParas = { Student: "The UCSC Students can use the system to go through their industrial placement more precisely.", 
                    PDC: "The Professional Development Center(PDC) connect the students and the organizations.", 
                    Organization: "Organizations can use the system to find their best interns from UCSC." };

class HowDoesItWord extends Component { 
    render() { 
        // console.log(cardParas['Student']);
        return (
            <Container id="howDoesItWork" className="mt-5 mb-5">
                <Row >
                    <Col xxl="6" className="mx-auto text-center">
                        <h1>How Does It Work?</h1>
                        <p>Following you can see who are the users of the UCSC InternHub and how you can use the system.</p>
                    </Col>
                </Row>
                <Row className="mt-5 cards">
                    {cardTitle.map((cardtitle)=>(
                        <Col lg="4" className='d-flex justify-content-center align-items-center' key={cardTitle.indexOf(cardtitle)}><HomeCard
                        key={cardTitle.indexOf(cardtitle)}
                        cardTitle={cardtitle}
                        cardPara={cardParas[cardtitle]}
                        ></HomeCard></Col>
                    ))}
                    
                    
                </Row>
            </Container>
        );
    }
}
 
export default HowDoesItWord;