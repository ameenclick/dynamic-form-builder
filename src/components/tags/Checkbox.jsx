import React from 'react'
import { useGlobalContext } from '../../Context'

export default function Checkbox({ field, index }) {

  return (
    field?.tag === "checkbox"?
        <div class="form-check mb-3">
                <input class="form-check-input" name={`${field.tag}${index}`} type="checkbox" id="flexCheckDefault" 
                 checked={field.checked} require={field.required} disabled={field.disabled}/>
                <label class="form-check-label" for="flexCheckDefault">
                {field.label}
                </label>
        </div>
        :""
  )
}
