import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { url } from '../../config';

export default function Response() {
  const { id }= useParams();
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    axios.get(url.API+"Response/"+id, {headers: "Content-Type: application/json"})
    .then(res =>{
      console.log(res.data)
      if(res.data.response.length >= 0)
      {
        console.log(res.data.response)
        setData(res.data.response);
        setFields(res.data.labels);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className='container'>
        {
          data.length>0?
          <table class="table table-dark table-striped rounded-pill">
              <thead>
              <tr>
                 <th>S No</th>
                 <th>Id</th>
                 {
                   fields?.map((label, index) =>
                   <th key={index}>{label}</th>
                   )
                 }
              </tr>
              </thead>
              <tbody>
              {
                  data?.map((res, rindex) =>
                  <tr>
                    <td>
                      {rindex+1}
                    </td>
                    <td>
                      {res.userId}
                    </td>
                      {
                    fields.map((label,fIndex) => 
                        res.response.map((userInputs) =>
                        userInputs.hasOwnProperty(label)?
                        <td>
                        {userInputs[label]}
                        </td>
                        :
                        <td>{null}</td>
                        )
                    )
                      }
                  </tr>
                  )
              }
              </tbody>
          </table>
          :
          <h2>No response received till now.</h2>
        }
    </div>
  )
}
