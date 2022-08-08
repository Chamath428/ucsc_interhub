import React, { Component } from 'react';
import './infoCardStyles.css';  

class InfoCard extends Component {
    render() { 
        const title=this.props.title;
        const count=this.props.count;
        return (

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon purple">
                  <i className="bi bi-alipay"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10">{this.props.title}</h6>
                  <h3 className="text-bold mb-10">{this.props.count}</h3>
                </div>
              </div>

            </div>

        );
    }
}
 
export default InfoCard;