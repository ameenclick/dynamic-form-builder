import React from 'react'

export default function Checkbox({ field, index }) {

  return (
    field?.tag === "checkbox"?
        <div class="form-check mb-3">
                <input id={index} class="form-check-input" name={`${field.tag}${index}`} type="checkbox" require={field.required} disabled={field.disabled}/>
                <label class="form-check-label" for="flexCheckDefault">
                {field.label}
                </label>
        </div>
        :""
  )
}
