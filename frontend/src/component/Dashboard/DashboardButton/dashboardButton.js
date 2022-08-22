import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './dashboardButtonStyle.css';

class DashboardButton extends Component {
    
    render() { 
        const inside=this.props.inside;
        const method= this.props.method;
        return (
            <>
                    <Button 
                    variant="primary" 
                    size="lg"
                    className='border border-2 border-primary rounded-2 btn-primary fw-bold'
                    onClick={method}
                    >
                    {inside}
                    </Button>

            </>
        ); 
    }
}
 
export default DashboardButton;