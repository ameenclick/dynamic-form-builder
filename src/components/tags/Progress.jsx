import React from 'react'

export default function Progress({ field, index }) {
  return (
    field?.tag === "rateing"?
    <div>
        <label className='form-label'>{field.label}</label>
        <input type="range" name={`progress${index}`} class="form-range" id="customRange1" value={field.value}/>
    </div>
    : ""
  )
}
