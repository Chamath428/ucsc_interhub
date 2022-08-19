import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import "./coordinatorCard.css";

class coordinatorCard extends Component {

  render() {
    const title = this.props.title;
    const count = this.props.count;
    const icon = this.props.icon;
    const cardWidth = this.props.cardWidth;
    return (
      <div className={"col-xl-" + cardWidth + " col-lg-4 col-sm-6"}>
        <div className="icon-card">
          <div className="icon purple">
            <i className={"bi bi-" + icon}></i>
          </div>
          <div className="content">
            <h6 className="mb-10">{title}</h6>
            <h4 className="text-bold mb-10">{count}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default coordinatorCard;

// text - center -> to make the text center
// fw-bold -> to make the text bold
// Image name should be as sane as the card title so it can easily find it from the image folder
