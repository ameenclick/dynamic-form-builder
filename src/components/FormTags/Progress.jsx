import React from 'react'

export default function Progress({ field, index }) {
  return (
    field?.tag === "rateing"?
    <div>
        <label className='form-label'>{field.label}</label><span className='text-danger'>{field.required?"*":""}</span>
        <input id={index} type="range" name={`progress${index}`} defaultValue="0" min="0" max="10" step="1" className="form-range"/>
    </div>
    : ""
  )
}
