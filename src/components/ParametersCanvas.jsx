import React, {useEffect, useState} from 'react'
import { Offcanvas,Row, }  from 'react-bootstrap';
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { useGlobalContext } from "../Context";
import Button from 'react-bootstrap/Button';
import CheckboxSettings from './CustomSettings/CheckboxSettings';
import RadioSettings from './CustomSettings/RadioSettings';
import DropdownSettings from './CustomSettings/DropdownSettings';
import InputSettings from './CustomSettings/InputSettings';
import TextareSettings from './CustomSettings/TextareSettings';
import HeadTextSettings from './CustomSettings/HeadTextSettings';
import ImageSettings from './CustomSettings/ImageSettings';
import URLSettings from './CustomSettings/URLSettings';
import FooterSettings from './CustomSettings/FooterSettings';

export default function ParametersCanvas(props) {
  const {show, handleClose, form, setForm, selected, fieldEdit, setEdit, deleteField} = useGlobalContext();
  //const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    var temp={...form}
    temp.fields[selected]=fieldEdit
    setForm(temp)
  }, [fieldEdit])

  return (
    <>
        {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
        <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Field Parameters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Form Title</label><span className='text-danger'>*</span>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter title of your form" value={form?.title} onChange={(e) => setForm({...form, ["title"]: e.target.value})} disabled={selected>=0?true:false}/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Form Description</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Describe your form" value={form?.description}  onChange={(e) => setForm({...form, ["description"]: e.target.value})} disabled={selected>=0?true:false}/>
          </div>
          {fieldEdit.label !== undefined?
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Field Label</label><span className='text-danger'>*</span>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Give a label for the field"
                value={fieldEdit["label"]}
                onChange={(e) => setEdit({...fieldEdit,["label"]:e.target.value})} disabled={selected>=0?false:true}/>
            </div>
            : ""
          }
         {/* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Placeholder
            </label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter placeholder"
                value={fieldEdit["placeholder"]} onChange={(e) => setEdit({...fieldEdit,["placeholder"]: e.target.value})} disabled={selected>=0?false:true}/>
          </div> */}
          <Row>
            <TextareSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            {fieldEdit?.tag === "dropdown" || fieldEdit?.tag === "radio"?
            <div className="col mb-3">
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
                      <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                    </svg>
                      Update Choice
                  </Button>
              </div>:""
            }
          </Row>
          <Row>
            <RadioSettings fieldEdit={fieldEdit} setEdit={setEdit} open={open} />
            <DropdownSettings  fieldEdit={fieldEdit} setEdit={setEdit} open={open} />
            <InputSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            <CheckboxSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            <HeadTextSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            <ImageSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            <URLSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            <FooterSettings fieldEdit={fieldEdit} setEdit={setEdit} />
          </Row>
          <Row className="mb-3">
            { fieldEdit.required !== undefined?
              <div className='col-8'>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" checked={fieldEdit["required"]} id="flexCheckDefault" 
                  onClick={(e) => setEdit({...fieldEdit,["required"]: !fieldEdit["required"]})}/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Field must me filled?
                  </label>
                </div>
              </div>
              : ""
            }
            {
              fieldEdit?.disabled !== undefined?
              <div className='col-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={fieldEdit["disabled"]} id="flexCheckDefault"
                    onClick={(e) => setEdit({...fieldEdit,["disabled"]: !fieldEdit["disabled"]})} />
                    <label class="form-check-label" for="flexCheckDefault">
                      Disable?
                    </label>
                  </div>
                </div>
                :""
            }
          </Row>
          {
           selected>=0?
            <button type="button" class="btn btn-danger mx-2 float-end" onClick={() => deleteField()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
                {"  "}Delete
            </button>
            :""
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
