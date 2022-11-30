import React from 'react'

export default function Textarea({ field, index }) {
  return (
    field.tag === "textarea"?
        <div class="mb-3">
        <label class="form-label">{field.label}</label>                
        <textarea name={`textarea${index}`} class={field.colSize+" "+field.columns} id="exampleFormControlTextarea1" placeholder={field.placeholder} rows={field.rows} require={field.required} disable={field.disabled} columns={field.columns}></textarea>
        </div>    :""
  )
}
