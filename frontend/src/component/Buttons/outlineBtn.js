import Button from 'react-bootstrap/Button';

function InfoBtn(props) {

    return (
      <>
        <Button variant="outline-primary">{props.text}</Button>
        
      </>
    );
  
}

export default InfoBtn;