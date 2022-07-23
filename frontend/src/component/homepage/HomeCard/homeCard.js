import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

class HomeCard extends Component {
    
    render() { 
        const cardTitle=this.props.cardTitle;
        const cardPara=this.props.cardPara;
        return (
          <>
          <Card className="d-flex justify-content-around flex-column align-items-center" style={{ width: '18rem',height:'20rem'}}>
            <Card.Img variant="top" className="mt-3 mb-3" src={require("../../../assets/images/"+cardTitle+".png")} style={{ width: '96px',height: '96px'}} />
            <Card.Body className="h-50 d-flex justify-content-start flex-column align-items-center">
              <Card.Title className="text-center fw-bold">{cardTitle}</Card.Title>
              <Card.Text  className="text-center">
                {cardPara}
              </Card.Text>
            </Card.Body>
          </Card>
          </>
        );
    }
}
 
export default HomeCard;

// text - center -> to make the text center
// fw-bold -> to make the text bold
// Image name should be as sane as the card title so it can easily find it from the image folder