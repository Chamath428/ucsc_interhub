import { Component } from 'react';
import Figure from 'react-bootstrap/Figure';

class ProfilePic extends Component{
    render(){
        return (
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="Profile Picture"
                src="https://pbs.twimg.com/profile_images/1480644028521541632/NocsQPWI_400x400.jpg"
              />

            </Figure>
          );
    }

}

export default ProfilePic;