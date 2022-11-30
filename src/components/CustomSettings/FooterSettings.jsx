import React from 'react'

export default function FooterSettings({ fieldEdit, setEdit}) {
  return (
    fieldEdit?.tag === "footer"?
    <div className='col'>
        <div className='mb-2'>
            <label className='form-label'>Enter text to print</label>
            <input className='form-control' type="url" placeholder='Enter the link address' value={fieldEdit.text} onChange={(e) => { setEdit({...fieldEdit, ["text"]: e.target.value})}} />
        </div>
        <div className='mb-2'>
            <label className='form-label'>Source Link</label>
            <input className='form-control' type="url" placeholder='Enter the link address' value={fieldEdit.url} onChange={(e) => { setEdit({...fieldEdit, ["url"]: e.target.value})}} />
        </div>
        <div className='mb-2'>
            <label className='form-label'>Show Text</label>
            <input className='form-control' type="text" placeholder='Enter a text to show' value={fieldEdit.a} onChange={(e) => { setEdit({...fieldEdit, ["a"]: e.target.value})}} />
        </div>
    </div>
    : ""
  )
}
