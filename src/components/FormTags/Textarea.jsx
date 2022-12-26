import React from 'react'

export default function Textarea({ field, index }) {
  return (
    field.tag === "textarea"?
        <div className="mb-3">
        <label className="form-label">{field.label}</label><span className='text-danger'>{field.required?"*":""}</span>              
        <textarea name={`textarea${index}`} className={field.colSize+" "+field.columns}  id={index} placeholder={field.placeholder} rows={field.rows} required={field.required} columns={field.columns}></textarea>
        </div>    :""
  )
}
