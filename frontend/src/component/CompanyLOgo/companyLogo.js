import { Component } from 'react';
import Figure from 'react-bootstrap/Figure';
import img from '../../assets/images/SyscoLABS.jpg';

class logo extends Component{
    render(){
        return (
            <Figure>
              <Figure.Image
                width={150}
                height={150}
               
                alt="Company Logo"

                src={img}
                style={{borderRadius: '50%'}}
              />

            </Figure>
          );
    }

}

export default logo;