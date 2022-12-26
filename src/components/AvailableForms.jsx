import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { url } from '../../config'
import { useGlobalContext } from '../Context'

export default function AvailableForms() {
    const [data, setData] = useState([])
    const { setAlert } = useGlobalContext()

    useEffect(() => {
        axios.get(url.API+"Forms/Active", {headers: { "Content-Type": "application/json"}})
        .then((res) => {
            if(res.data.length>0)
            {
                setData(res.data)
            }
            else
            {
                setAlert({
                    message: "No active forms",
                    type: "warning",
                    show: true
                })
            }
        })
        .catch((err) => {
            console.log(err)
            setAlert({
                    message: "Server error, try again later..",
                    type: "danger",
                    show: true
                })
        })
    }, [])

  return (
    <div className='container'>
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Form Title</th>
                    <th className='text-center'>Active Forms</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((form, index) =>
                    <tr>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {form.stack[form.stack.length-1].title}
                        </td>
                        <td className='d-flex justify-content-center'>
                            <a className='btn btn-primary rounded-pill'
                             href={'/Form/'+form._id}
                             target="_blank"
                             >
                                Open
                             </a>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
