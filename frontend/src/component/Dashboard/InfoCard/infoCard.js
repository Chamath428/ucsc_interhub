import React, { Component } from 'react';
import './infoCardStyles.css';  

// get icons from this site - https://icons.getbootstrap.com/
// if font is this - <i class="bi bi-1-circle"></i>,
// use only the part after bi bi-
// in the above example you have to icon = '1-circle'

class InfoCard extends Component {
    render() { 
        const title=this.props.title;
        const count=this.props.count;
        const icon = this.props.icon;
        const cardWidth = this.props.cardWidth;
        
        return (

            <div className={"col-xl-"+this.props.cardWidth+" col-lg-4 col-sm-6"}>
              <div className="icon-card mb-30">
                <div className="icon purple">
                  <i className={"bi bi-"+this.props.icon}></i>
                </div>
                <div className="content">
                  <h6 className="mb-10">{this.props.title}</h6>
                  <h4 className="text-bold mb-10">{this.props.count}</h4>
                </div>
              </div>
            </div>
        );
    }
}
 
export default InfoCard;