import React from 'react'
import { useGlobalContext } from '../../Context'

export default function Checkbox({ field, index }) {

  return (
    field?.tag === "checkbox"?
        <div className="form-check mb-3">
                <input className="form-check-input" name={`${field.tag}${index}`} type="checkbox" id="flexCheckDefault" 
                 defaultChecked={field.checked} required={field.required} disabled={field.disabled}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                {field.label}
                </label>
        </div>
        :""
  )
}
