import React from 'react'
import { Modal,Button }  from 'react-bootstrap';
import { useGlobalContext } from '../../Context';
import APIResponse from "./APIResponse";

export default function APIConfigure(props) {
  const { fieldEdit, setEdit, handleFetch,apiResponse,setResponse, setAlert } = useGlobalContext();
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          API Configuration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {fieldEdit?.tag === "dropdown"?
            <form>
          {apiResponse === null?
          <div>
              <h5><b>Header Configuration</b></h5>
              <div className="mb-2">
                    <label className='form-label'>URL Path</label><span className='text-danger'>*</span>
                    <input className='form-control' value={fieldEdit.api.url} type="url" placeholder="Enter API Link" onChange={(e) => {
                      var api={...fieldEdit.api,};
                      api["url"]=e.target.value;
                      setEdit({...fieldEdit, ["api"]: api})
                    }} pattern="https?://.+" title="Follow format: https://api.example.com/dataset" required/>
              </div>
              <div className="mb-2">
                <label className='form-label'>Method</label><br/>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name="method" type="radio" onClick={() => {
                    var api={...fieldEdit.api,};
                    api["method"]="GET";
                    setEdit({...fieldEdit, ["api"]: api})
                  }} id="inlineRadio1" value="option1"
                  checked={fieldEdit?.api?.method==="GET"}/>
                  <label class="form-check-label" for="inlineRadio1">GET</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name="method" type="radio" onClick={() => {
                    var api={...fieldEdit.api,};
                    api["method"]="POST";
                    setEdit({...fieldEdit, ["api"]: api})
                  }} id="inlineRadio2" value="option2"
                  checked={fieldEdit?.api?.method==="POST"}/>
                  <label class="form-check-label" for="inlineRadio2">POST</label>
                </div>
              </div>

              <div className='mb-2'>
                <label className='form-label'>Headers</label><br/>
                  {
                  fieldEdit?.api?.headers.map((header,index) => 
                  <div className='row mb-1'>
                    <div className='col-11'>
                      <div className='input-group'>
                        <input className='form-control' type="text" placeholder='Enter Header Key' 
                          title="Change only if the 'Authorization' is not API object"
                          value={header.key}
                          onChange={(e) => {
                            var api=fieldEdit?.api;
                            api.headers[index]["key"]=e.target.value
                            setEdit({...fieldEdit, ["api"]:api})
                          }} />
                        <input className='form-control' type="text" placeholder='Enter Header Value' 
                          title='Enter authorization hashcode'
                          value={header.value}
                          onChange={(e) => {
                            var api=fieldEdit?.api;
                            api.headers[index]["value"]=e.target.value
                            setEdit({...fieldEdit, ["api"]:api})
                          }} />
                        </div>
                      </div>
                      <div className='col'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" 
                            fill="currentColor" 
                            class="bi bi-trash3-fill" 
                            viewBox="0 0 16 16"
                            onClick={() => {
                              var api=fieldEdit?.api
                              api.headers.splice(index,1)
                              setEdit({...fieldEdit,["api"]: api } )
                            }}
                            >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                      </div>
                  </div>
                  )
                }
                <svg xmlns="http://www.w3.org/2000/svg"
                      title="Add 1 field" 
                      width="30" height="30" fill="currentColor" 
                      class="bi bi-plus-square-dotted" viewBox="0 0 16 16" 
                      onClick={() => {
                      var api=fieldEdit?.api
                      api["headers"]=[...api.headers,{ "key": "", "value": ""}]
                      setEdit({...fieldEdit,["api"]: api } )
                    }}>
                      <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg> 
              </div>
              {
                fieldEdit?.api?.method === "POST"?
                  <div className='mb-2'>
                    <div className='row'>
                      <div className='col'>
                        <label className='form-label'>Body for POST Method</label>
                        <textarea type="text" className='form-control'
                          title='Give the value maping to the Keyword shown in dropdown list'
                          onChange={(e) =>{
                            var api={...fieldEdit.api,};
                            api["data"]=JSON.parse(e.target.value)
                            setEdit({...fieldEdit, ["api"]:api})
                          }}>{fieldEdit?.api?.data}</textarea>    
                      </div>
                    </div>
                  </div>
                  :""
              }
            </div>
            :
            <div>   
              <h5><b>Response Configuration</b></h5>
              <div className='mb-2'>
                <div className='row'>
                    <APIResponse dataset={apiResponse} setDataset={setResponse} />
                </div>
              </div>
              <div className='mb-2'>
                <div className='row'>
                  <div className='col'>
                    <label className='form-label'>Object to Show</label>
                    <input type="text" className='form-control'
                      value={fieldEdit?.api?.label}
                      title='Give the Keyword used in API response to show in dropdown list'
                      onChange={(e) =>{
                        var api={...fieldEdit.api,};
                        api["label"]=e.target.value
                        setEdit({...fieldEdit, ["api"]:api})
                      }}/>    
                  </div>
                  <div className='col'>
                    <label className='form-label'>Object to Input</label>
                    <input type="text" className='form-control'
                      title='Give the value maping to the Keyword shown in dropdown list'
                      value={fieldEdit?.api?.value}
                      onChange={(e) =>{
                        var api={...fieldEdit.api,};
                        api["value"]=e.target.value
                        setEdit({...fieldEdit, ["api"]:api})
                      }}/>    
                  </div>
                </div>
              </div>
            </div>
            }
            </form>
            :""
            }

        </Modal.Body>
        <Modal.Footer>
            {
              apiResponse?
              <Button onClick={() => {
                //Validate if object is in dataset
                    if(fieldEdit.api.label != "" && fieldEdit.api.value != "") //If a proper label exist
                    {
                      if(Array.isArray(apiResponse) && apiResponse.length>=0 && typeof(apiResponse[0]) === "object") // If dataset is iterable with objects
                      {
                        if(apiResponse[0].hasOwnProperty(fieldEdit.api.label) && apiResponse[0].hasOwnProperty(fieldEdit.api.value)) //If label and value objects exists
                        {
                          setEdit({...fieldEdit, ["choices"]: apiResponse})
                          props.onHide()
                          setAlert({
                            message:"Data Loaded Successfully",
                            type: "success",
                            show: true
                          })
                        }
                        else
                        {
                          alert("Invalid objects entered")
                          return
                        }
                      }
                      else
                      {
                        alert("Invalid Dataset")
                        return
                      }
                      
                    }
                    else if(Array.isArray(apiResponse) && apiResponse.length>=0 && typeof(apiResponse[0]) !== "object") //If datasets consist of strings(non objects)
                    {
                        setEdit({...fieldEdit, ["choices"]: apiResponse})
                        props.onHide()
                        setAlert({
                          message:"Data Loaded Successfully",
                          type: "success",
                          show: true
                        })
                    }
                    else //Configuration failed to meet crietria
                    {
                        alert("Objects configuration does not match with dataset")
                    }
                }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>{"  "}Set Data
              </Button>
            :
              <Button onClick={() => {
                if(fieldEdit?.api?.url === "")
                {  
                  alert("Fill the url field");
                  return;
                }
                else handleFetch(props);
                }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>{"  "}Get Data
              </Button>
            }
        </Modal.Footer>
      </Modal>
    );
  }