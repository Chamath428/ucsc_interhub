import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import "./sMCard.css";

class sMCard extends Component {
    
    render() { 
        const cardTitle=this.props.cardTitle;
        const cardPara=this.props.cardPara;
        return (
          <>
          <Card id='sMCard' className="d-flex justify-content-around flex-column align-items-center" style={{maxWidth: '371px',height:'130px'}}>
            <Card.Body className="d-flex justify-content-start flex-column align-items-center">
              <Card.Title className="text-left fw-bold">{cardTitle}</Card.Title>
              <Card.Text  className="text-center"> {cardPara}</Card.Text>
            </Card.Body>
          </Card>
          </>
        );
    }
}
 
export default sMCard;

// text - center -> to make the text center
// fw-bold -> to make the text bold
// Image name should be as sane as the card title so it can easily find it from the image folder
