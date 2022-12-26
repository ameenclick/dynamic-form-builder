import React from 'react'

export default function Checkbox({ field, index }) {

  return (
    field?.tag === "checkbox"?
        <div className="form-check mb-3">
                <input id={index} className="form-check-input" name={`${field.tag}${index}`} type="checkbox" required={field.required} disabled={field.disabled}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                {field.label}
                </label>
        </div>
        :""
  )
}
