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
          <table class="table table-dark table-striped">
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
                  data?.map((res, index) =>
                  <tr>
                    <td>
                      {index+1}
                    </td>
                    <td>
                      {res.userId}
                    </td>
                    {
                    res.response.map((userInputs,lIndex) =>
                    <td>
                     {userInputs[fields[lIndex]]!==undefined?String(userInputs[fields[lIndex]]):""}
                    </td>
                    )
                    }
                  </tr>
                  )
              }
              </tbody>
          </table>
        }
    </div>
  )
}
