import React from 'react'

export default function URLSettings({ fieldEdit, setEdit }) {
  return (
    fieldEdit?.tag === "url"?
    <div className='col'>
      <div className='mb-2'>
        <label className='form-label'>Source Link</label>
        <input className='form-control' type="url" placeholder='Enter the link address' value={fieldEdit.url} onChange={(e) => { setEdit({...fieldEdit, ["url"]: e.target.value})}} />
      </div>
      <div className='mb-2'>
        <label className='form-label'>Show Text</label>
        <input className='form-control' type="url" placeholder='Enter a text to show' value={fieldEdit.text} onChange={(e) => { setEdit({...fieldEdit, ["text"]: e.target.value})}} />
      </div>
    </div>
    : ""
  )
}
