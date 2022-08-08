import Button from 'react-bootstrap/Button';

function PrimaryBtn(props) {

    return (
      <>
        <Button variant="primary">{props.text}</Button>
        
      </>
    );
  
}

export default PrimaryBtn;