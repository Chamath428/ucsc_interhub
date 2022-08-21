import { Component } from 'react';
import Figure from 'react-bootstrap/Figure';

class ProfilePic extends Component{
    render(){
        return (
            <Figure>
              <Figure.Image

                alt="Profile Picture"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
              />

            </Figure>
          );
    }

}

export default ProfilePic;