import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

//BG Colour: 'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark',

//key: 'primary' (in lower case)

function DashCards(props) {
  return (
    <Card 
          bg={props.BgColour}
          key={props.BgColour}
          text={props.txtColour}
          style={{ width: '20rem' }}
          className="mb-2"
        >

      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.SubTitle}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DashCards;