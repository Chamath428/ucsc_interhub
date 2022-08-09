import Accordion from 'react-bootstrap/Accordion';
import InfoBtn from '../Buttons/outlineBtn';
import PrimaryBtn from '../Buttons/primaryBtn';

function AccordionItem(props) {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
        
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.Header}</Accordion.Header>
        <Accordion.Body>
          {props.body}
          <br /><br />
          <div style={{marginRight: '5px', display: 'inline'}}>
          <PrimaryBtn text='Accept' ></PrimaryBtn>
          </div>
          <InfoBtn text='View'></InfoBtn>

        </Accordion.Body>

      </Accordion.Item>
      <br />
    </Accordion>
  );
}

export default AccordionItem;