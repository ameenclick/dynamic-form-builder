import React from 'react'

export default function Textarea({ field, index }) {
  return (
    field.tag === "textarea"?
        <div className="mb-3">
        <label className="form-label">{field.label}</label>                
        <textarea name={`textarea${index}`} className={field.colSize+" "+field.columns} id="exampleFormControlTextarea1" placeholder={field.placeholder} rows={field.rows} required={field.required} disabled={field.disabled} columns={field.columns}></textarea>
        </div>    :""
  )
}
