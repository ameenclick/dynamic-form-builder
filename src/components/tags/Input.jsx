import React from 'react'
import { icons } from '../constants/icons';

export default function Input({ field, index }) {
  return ( 
    field?.tag === "input"?
        <div className='mb-3'>
        <label className="form-label">{field.label}</label>
        <div className={` ${field.icon?"input-group":""}`}>
        {
          field.icon?.span === "prefix" && field?.icon?.svg!=null?
          <span className="input-group-text">
            {icons[field?.icon?.svg]}
          </span>
          :""
        }
        <input type={field.type} name={`${field.tag}${index}`} 
                className={field.colSize+" "+field.columns} 
                id="exampleFormControlInput1" 
                placeholder={field.placeholder} 
                required={field.required} 
                disable={field.disabled}/>
        {
          field.icon?.span === "sufix" && field?.icon?.svg!=null?
          <span className="input-group-text">
            {icons[field?.icon?.svg]}
          </span>
          :""
        }
        </div>
        </div>
        :""
  )
}
