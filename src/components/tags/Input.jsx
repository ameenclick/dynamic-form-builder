import React from 'react'
import { icons } from '../constants/icons'

export default function Input({ field, index }) {
  return ( 
    field?.tag === "input"?
        <div className='mb-3'>
        <label class="form-label">{field.label}</label>
        <div class={` ${field.icon?"input-group":""}`}>
        {
          field.icon?.span === "prefix" && field?.icon?.svg?
          <span class="input-group-text">
            {field?.icon?.svg}
          </span>
          :""
        }
        <input type={field.type} name={`${field.tag}${index}`} class={field.colSize+" "+field.columns} id="exampleFormControlInput1" placeholder={field.placeholder} require={field.required} disable={field.disabled}/>
        {
          field.icon?.span === "sufix" && field?.icon?.svg?
          <span class="input-group-text">
            {field?.icon?.svg}
          </span>
          :""
        }
        </div>
        </div>
        :""
  )
}
