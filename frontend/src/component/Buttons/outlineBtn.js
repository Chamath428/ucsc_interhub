import Button from 'react-bootstrap/Button';

function InfoBtn(props) {

    return (
      <>
        <Button variant="outline-primary" onClick={props.link}>{props.text}</Button>
        
      </>
    );
  
}

export default InfoBtn;