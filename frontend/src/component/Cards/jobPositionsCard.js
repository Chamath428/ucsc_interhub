import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function JobPositionsCard(props) {
    return (
        <Card className='mt-2 mb-1 m-1' style={{ width: '270px', height: '220px' }}>
            <Card.Header>{props.Header}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.Text}
                </Card.Text>
                <Button variant="primary" style={{float: 'right'}}>{props.Button}</Button>
            </Card.Body>
        </Card>
    );
}

export default JobPositionsCard;