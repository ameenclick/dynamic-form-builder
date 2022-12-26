import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { url } from '../config'
import AlertToast from './components/CustomSettings/AlertToast'
import { useGlobalContext } from './Context'

export default function Forms() {
    const [forms, setForms] = useState([])
    const { setAlert, formActivate } = useGlobalContext();

    function fetchAllForms(){
        axios.get(url.API+"Forms/", {headers: { "Content-Type": "application/json"}})
        .then(res => {
            if(res.data.length>0) setForms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchAllForms()
    }, [])

  return (
    <div className='container'>
        <AlertToast />
        <div className='fixed-bottom'>
            <button className='btn btn-light border d-flex float-end m-3'  onClick={() => fetchAllForms()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
            </button>
        </div>
        <table className="table table-striped" style={{ width: "100%"}}>
        <thead> <th>S No.</th><th>Form Title</th><th className='text-center'>Forms</th><th className='text-center'>Response</th><th className='text-center'>Activation</th><th></th></thead>
        <tbody>
        {
            forms.map((form, index) =>
                <tr>
                    <td>
                        {index+1}
                    </td>
                    <td>
                        {form.stack[form.stack.length-1].title}
                    </td>
                    <td className='text-center'>
                        <a className='btn btn-primary' target="_blank" href={"Form/"+form._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                        </a>
                    </td>
                    <td className='text-center'>
                        <a className='btn btn-primary mx-3 my-1 rounded'  href={"Response/"+form._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>  
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/></svg>
                        </a>
                    </td>
                    <td>
                        <div className="form-check form-switch d-flex justify-content-center">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={form.active} onClick={
                                () => {
                                    var temp = [...forms,]
                                    temp[index]["active"]=!form.active
                                    formActivate(form._id, temp[index])
                                    setForms(temp)
                                }}/>
                        </div>
                    </td>
                    <td>
                        <a className='btn btn-info mx-3 my-1' target="_blank" href={"Builder/"+form._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                            </svg>
                        </a>
                        <button className='btn btn-danger mx-3 my-1' target="_blank" onClick={() => {
                            if(confirm("The form is going to delete."))
                            {
                                axios.delete(url.API+"form/"+form._id)
                                .then((res) => {
                                    if(res.status == 200)
                                    {
                                        var temp=[...forms,]
                                        temp.splice(index,1)
                                        setForms(temp)
                                        setAlert({ 
                                            show:true,
                                            message: "The form deleted successfully",
                                            type: "secondary",
                                        })
                                    }
                                })
                                .catch((err) => {
                                    console.log(err.message)
                                    setAlert({ 
                                        show:true,
                                        message: err.message,
                                        type: "danger",
                                    })
                                })
                            }
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
        )
        }
       </tbody>
       </table>
    </div>
  )
}
