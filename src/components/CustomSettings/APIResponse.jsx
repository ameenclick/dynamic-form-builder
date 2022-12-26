import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

//Validating API configuration and response with UI expectation of form
export default function APIResponse({dataset, setDataset}) {
    const fulldata = useRef();
    const [choosenObject, setObject] = useState(null);
    const [objectsChoosen, setObjects] = useState(null);


  return (
    <>
        <div style={{height: "400px", width: "vw"}}>
            <div className='border rounded' style={{ height: "100%", overflow: "auto"}}>
            {
                dataset?
                <pre>{JSON.stringify( dataset, null, 2)}</pre>
                :""
            }
            </div>
        </div>
        <div className='row d-flex justify-content-center my-2'>
            <div className='col-lg-9'>
                <div className='input-group'>
                {
                    objectsChoosen!==null?
                    <button className='btn btn-outline-primary'
                        onClick={() => {
                            setDataset(fulldata.current)
                            setObjects(null)
                            setObject(fulldata.current)
                        }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>:""
                }
                {
                    objectsChoosen?.map((object, index) => 
                        <button className={"btn "+(object===choosenObject?"btn-primary":"btn-outline-primary")} 
                            onClick={() => {
                            var temp= fulldata.current;
                            for(var i=0;i<=index;i++)
                            {
                                    temp=temp[objectsChoosen[i]]
                            }
                            setObject(objectsChoosen[index]);
                            setDataset(temp);
                            setObjects(objectsChoosen.splice(0,index+1));
                            }} href="#">{typeof(object) === Number? object+1:object}</button>
        
                    )
                }
                <select className='form-select' 
                    onChange={(e) => { setObject(e.target.value)}}
                    >
                    <option defaultValue={null}>Choice a object</option>
                    {
                        Object.keys(dataset).map((key, index) => 
                        <option key={index} selected={key === choosenObject}>{Array.isArray(dataset)? index+1:key}</option>
                        )
                    }
                </select>
                <button className='btn btn-outline-dark'
                    onClick={(e) => {
                        e.preventDefault();
                        if(choosenObject===null){
                            alert("Make a choice to expand") 
                        }
                        else if(typeof(dataset[choosenObject]) !== "object")
                        {
                            alert("Unexpandable choice!..") 
                        }
                        else {
                            setDataset(dataset[choosenObject]) 
                            setObjects(objectsChoosen===null?[choosenObject]:[...objectsChoosen,choosenObject])
                        }
                    }}
                ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">
                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/>
              </svg> Expand</button>
            </div>
            </div>
        </div>
    </>
  )
}
