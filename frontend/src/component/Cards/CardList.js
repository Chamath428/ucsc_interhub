import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class CardListItem extends Component {

  render()
  {
    const header = this.props.header;
    const listItem1 = this.props.listItem1;
    const listItem2 = this.props.listItem2;
    const listItem3 = this.props.listItem3;
    const listItem4 = this.props.listItem3;
    const listItem5 = this.props.listItem3;


    return (

      <Card>

        <Card.Header>{header}</Card.Header>

        <ListGroup variant="flush">
            <ListGroup.Item>{listItem1}</ListGroup.Item>
            <ListGroup.Item>{listItem2}</ListGroup.Item>
            <ListGroup.Item>{listItem3}</ListGroup.Item>    
            <ListGroup.Item>{listItem4}</ListGroup.Item>
            <ListGroup.Item>{listItem5}</ListGroup.Item>

        </ListGroup>

      </Card>

    );
  }

}

export default CardListItem;

