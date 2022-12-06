import React, { useEffect } from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Row, Col} from 'react-bootstrap';
import { useGlobalContext } from '../../Context';

export default function AlertToast() {
    const {alert, setAlert} = useGlobalContext();
    useEffect(() => {
        console.log("Toast Render")
    },[])
  return (
    <Row>
      <Col md={6} className="mb-2">
      <ToastContainer className="p-3" position="bottom-start">
      <Toast
        className="d-inline-block position-relative m-1 text-white"
        bg={alert.type}
         onClose={() => setAlert({ show: false, message: "", type: ""})} show={alert.show} delay={5000} animation={true} autohide>
        <Toast.Header>
            {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
            <strong className="me-auto">Form Builder</strong>
            <small>A moment ago</small>
        </Toast.Header>
      <Toast.Body>{alert.message}</Toast.Body>
    </Toast>
    </ToastContainer>
    </Col>
    </Row>
  )
}
