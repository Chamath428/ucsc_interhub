import Card from 'react-bootstrap/Card';

function BodyCard(props) 
{
  return <Card body className='mb-3'>
    {props.bodyText}
    </Card>;
}

export default BodyCard;