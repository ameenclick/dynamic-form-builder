import React, {useState} from 'react'
import { Modal,Button,Row, Col }  from 'react-bootstrap';
import { useGlobalContext } from '../Context';
import { icons } from './constants/icons';

export default function MyVerticallyCenteredModal(props) {
  const { fieldEdit, setEdit } = useGlobalContext();
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Iconize the field
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Choose your icon</h4>
          <Row>
            {
              icons.map((icon, index) =>
              <Col key={index}>
              <button className='btn btn-outline-dark m-2 p-2' onClick={() => setEdit({...fieldEdit, ["icon"]: { span: fieldEdit?.icon?.span, svg: icons[index]}})}>
                {icon}
              </button>
            </Col>
              )
            }
            
          </Row> 
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setEdit({...fieldEdit, ["icon"]: {
            span: e.target.value,
            svg: fieldEdit?.icon?.svg
          }})}>
            <option value="prefix" selected={fieldEdit?.icon?.span==="prefix"}>Prefix</option>
            <option value="sufix" selected={fieldEdit?.icon?.span==="sufix"}>Sufix</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>{"  "}Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }