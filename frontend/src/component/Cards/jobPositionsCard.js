import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function JobPositionsCard(props) {
    return (
        // <Card className='mt-2 mb-1 m-1' style={{ width: '270px', height: '220px' }}>
        //     <Card.Header>{props.Header}</Card.Header>
        //     <Card.Body>
        //         <Card.Text>
        //             {props.Text}
        //         </Card.Text>
        //         <Button variant="primary" style={{float: 'right'}}>{props.Button}</Button>
        //     </Card.Body>
        // </Card>

        <Card className={"col-xl-4 col-lg-4 col-sm-1"}>
        <Card.Body>
          <Card.Title>{props.Header}</Card.Title>
          <Card.Text>
            {props.Text}
          </Card.Text>
          <Button variant="primary">{props.Button}</Button>
        </Card.Body>
      </Card>
    );
}

export default JobPositionsCard;