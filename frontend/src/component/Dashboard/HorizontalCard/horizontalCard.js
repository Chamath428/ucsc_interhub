import React, { Component } from 'react';
import ProfilePic from '../../../assets/images/profile.jpg';
import DashboardButton from '../DashboardButton/dashboardButton';

class HorizontalCard extends Component {
    state = {  } 
    render() { 
        return (

            <div className="card mb-3" style={{maxWidth: "340px",backgroundColor:'#fff'}}>
                <div className="row g-0 al">
                    <div className="col-md-4">
                    <img src={ProfilePic} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between" style={{width:'100%',height:'100%'}}>
                        <div style={{width:'100%'}}><h5 className="card-title">Chamath Chinthana</h5></div>
                        <div style={{width:'100%'}} className='d-flex justify-content-end'><DashboardButton inside={'View Profile'}></DashboardButton></div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default HorizontalCard;