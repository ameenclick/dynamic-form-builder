import React, { useEffect, useState } from 'react'
import Preview from './Preview'
import Builder from './Builder'
import { useGlobalContext } from "../Context";

export default function Activities({id}) {
    const[preview, setPreview] = useState(false)
    
    const { getForm } = useGlobalContext();

    useEffect(() => {
        if(id)
        {
           getForm(id)
        }
    }, [])

  return (
    <div>
        {
          preview?
          <Preview setPreview={setPreview}/>
          :
          <Builder setPreview={setPreview}/>
        }
    </div>
  )
}
