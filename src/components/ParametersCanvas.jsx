import React, {useEffect, useState} from 'react'
import { Offcanvas,Row, }  from 'react-bootstrap';
import { useGlobalContext } from "../Context";
import APIConfigure from './CustomSettings/APIConfigure';
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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Share from './Share';

export default function ParametersCanvas(props) {
  const {show, handleClose, form, setForm, selected, fieldEdit, setEdit, deleteField, saveForm, formData, setFormData} = useGlobalContext();
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    var temp={...form}
    temp.fields[selected]=fieldEdit
    setForm(temp)
  }, [fieldEdit])

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])

  return (
    <>
        <Share />
        <APIConfigure
        show={modalShow}
        onHide={() => setModalShow(false)}
        /> 
        <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Field Parameters
          {"   "}
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                  <Tooltip id="button-tooltip">
                      Clear form
                  </Tooltip>
              }
              >
              <svg title="Reset the form" onClick={() => {
              if(confirm("The form you build will clear permanently"))
              {
                setForm({...form, ["fields"]: []})
                localStorage.clear();
              }
            }}
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
            </OverlayTrigger>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Form Title</label><span className='text-danger'>*</span>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter title of your form" value={form?.title} onChange={(e) => setForm({...form, ["title"]: e.target.value})} disabled={selected!=null?true:false}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Form Description</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Describe your form" value={form?.description}  onChange={(e) => setForm({...form, ["description"]: e.target.value})} disabled={selected!=null?true:false}/>
          </div>
          {fieldEdit?.hasOwnProperty("label")?
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Field Label</label><span className='text-danger'>*</span>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Give a label for the field"
                value={fieldEdit["label"]}
                onChange={(e) => setEdit({...fieldEdit,["label"]:e.target.value})} disabled={selected>=0?false:true}/>
            </div>
            : ""
          }
          <Row>
            <TextareSettings fieldEdit={fieldEdit} setEdit={setEdit} />
            {(fieldEdit?.tag === "dropdown") || fieldEdit?.tag === "radio"?
            <div className="row mb-3">
              <div className='col'>
                  <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                      >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-view-list" viewBox="0 0 16 16">
                      <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                    </svg>
                      Update Choice
                  </Button>
              </div>
              {(fieldEdit?.tag === "dropdown")?
              <div className='col'>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>{" "}Set API
                  </Button>
              </div>
              :""}
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
            { fieldEdit?.hasOwnProperty("required")?
              <div className='col-8'>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked={fieldEdit["required"]} id="flexCheckDefault" 
                  onClick={(e) => setEdit({...fieldEdit,["required"]: !fieldEdit["required"]})}/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Field must me filled?
                  </label>
                </div>
              </div>
              : ""
            }
            {
              formData?.stack?
            <div className="col-12 input-group">
              <span class="input-group-text">Version</span>
              <select className='form-select'
                onChange={(e) => {
                  setForm(formData?.stack[e.target.value])
                  setFormData({...formData, ["stack"]:[...formData.stack,formData?.stack[e.target.value]]})
                }}>
                {
                  formData?.stack?.reverse().map((each, index) =>
                    <option key={index} value={index} selected={form.version===each.version}>{each.version.substring(each.version.length - 7,each.version.length - 1)}</option>
                  )
                } 
              </select>
            </div>       
            :""
            }
            {/* {
              fieldEdit?.hasOwnProperty("disabled")?
              <div className='col-2'>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultChecked={fieldEdit["disabled"]} id="flexCheckDefault"
                    onClick={(e) => setEdit({...fieldEdit,["disabled"]: !fieldEdit["disabled"]})} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Disable?
                    </label>
                  </div>
                </div>
                :""
            } */}

          </Row>
          {
           selected!=null?
            <button type="button" className="btn btn-danger mx-2 float-start" onClick={() =>{if(confirm("Deleting field")) deleteField()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
                {"  "}Delete
            </button>
            :
            <Row className='mb-2 d-flex justify-content-center'>
              <div className='col align-self-center'>
                <button className='btn btn-primary rounded-pill' onClick={()=> {
                if(form?.fields?.length>0) props?.setpreview(true)
                else alert("Create a form")
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-play-fill" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"/>
                  </svg>{" "}Preview
                </button>
              </div>
              <div className='col align-self-center'>
                <button className='btn btn-success rounded-pill' onClick={saveForm}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-check" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                </svg>{" "}Save & Share
                </button>
              </div>
          </Row>
          }
          {/* <Row>
            <button className='btn btn-success rounded-pill' onClick={()=> {
              setForm({...form, ["fields"]:[...form.fields,[]]})
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-play-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"/>
              </svg>{" "}Add Page
            </button>  
          </Row> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
