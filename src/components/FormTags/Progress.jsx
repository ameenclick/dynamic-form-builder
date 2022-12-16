import React from 'react'

export default function Progress({ field, index }) {
  return (
    field?.tag === "rateing"?
    <div>
        <label className='form-label'>{field.label}</label>
        <input id={index} type="range" name={`progress${index}`} defaultValue="0" min="0" max="10" step="1" class="form-range"/>
    </div>
    : ""
  )
}
