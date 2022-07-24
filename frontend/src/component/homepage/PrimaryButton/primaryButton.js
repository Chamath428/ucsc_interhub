import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import './primaryButtonStyles.css';

function PrimaryButton() {
  const inside = this.props.inside;
  return (

        <Button 
        variant="primary" 
        size="lg"
        >
        {inside}
        </Button>

  );
}

export default PrimaryButton;
