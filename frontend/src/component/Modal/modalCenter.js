import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalInterviewRejection(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
    </Modal>
  );
}

export default ModalInterviewRejection;


// <Modal show={show} onHide={handleClose}>
// <Modal.Header closeButton>
//   <Modal.Title>Modal heading</Modal.Title>
// </Modal.Header>
// <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// <Modal.Footer>
//   <Button variant="secondary" onClick={handleClose}>
//     Close
//   </Button>
//   <Button variant="primary" onClick={handleClose}>
//     Save Changes
//   </Button>
// </Modal.Footer>
// </Modal>

// class modalInterviewReject extends Component {
//   render(){
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch static backdrop modal
//         </Button>

//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             I will not close if you click outside me. Don't even try to press
//             escape key.
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
        
//   }
// }

// export default modalInterviewReject;

// render(<modalInterviewReject />);