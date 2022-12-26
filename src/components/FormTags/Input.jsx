import React from 'react'
import { icons } from '../constants/icons';

export default function Input({ field, index }) {
  return ( 
    field?.tag === "input"?
        <div className='mb-3'>
        <label className="form-label">{field.label}</label><span className='text-danger'>{field.required?"*":""}</span>
        <div className={` ${field.icon?"input-group":""}`}>
        {
          field.icon?.span === "prefix" && field?.icon?.svg?
          <span className="input-group-text">
            {icons[field?.icon?.svg]}
          </span>
          :""
        }
        <input id={index} type={field.type} name={`${field.tag}${index}`} 
                className={field.colSize+" "+field.columns} 
                placeholder={field.placeholder} 
                required={field.required}/>
        {
          field?.icon?.span === "sufix" && field?.icon?.svg?
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
