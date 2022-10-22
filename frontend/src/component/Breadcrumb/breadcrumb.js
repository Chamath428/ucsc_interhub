import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumb(props) {
  return (
    <Breadcrumb>
      {ParentName && <Breadcrumb.Item href="#">{props.ParentName}</Breadcrumb.Item>}
      {Child1 && <Breadcrumb.Item href="#">{props.Child1}</Breadcrumb.Item>}
      {Child2 && <Breadcrumb.Item href="#">{props.Child2}</Breadcrumb.Item>}
    </Breadcrumb>
    // {listItem1 && <ListGroup.Item>{listItem1}</ListGroup.Item>}
  );
}

export default Breadcrumb;