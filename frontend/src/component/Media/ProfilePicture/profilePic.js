import { Component } from 'react';
import Figure from 'react-bootstrap/Figure';

function ProfilePic(props){
        return (
            <Figure>
              <Figure.Image

                alt="Profile Picture"
                src={props.url}
              />

            </Figure>
          );
    }

export default ProfilePic;