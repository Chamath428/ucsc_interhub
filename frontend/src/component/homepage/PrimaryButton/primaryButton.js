import Button from 'react-bootstrap/Button';
import React, { Component } from "react";

function PrimaryButton() {
  return (
    <>

<style type="text/css">
        {`
    .btn-primary {
      font-size: medium;
    }
    .btn-primary:hover{
      background-color: transparent;
      color: #0d6efd;
    }
    `}
      </style>

  <div className="mb-2">
        <Button 
        variant="primary" 
        size="lg"
        className='border border-2 border-primary rounded-5 btn-primary fw-bold'
        >
        Large button
        </Button>
      </div>

    </>
  );
}

export default PrimaryButton;
