import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class PrimaryButton extends Component {
    
    render() { 
        const inside=this.props.inside;
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

                    <Button 
                    variant="primary" 
                    size="lg"
                    className='border border-2 border-primary rounded-5 btn-primary fw-bold'
                    >
                    {inside}
                    </Button>

            </>
        );
    }
}
 
export default PrimaryButton;