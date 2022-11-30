import React from 'react'

export default function ProgressBar({ fieldEdit, setEdit}) {
  return (
    fieldEdit?.tag === "rateing"?
    <div className='col mb-2'>
        <label for="customRange1" class="form-label">Progress</label>
        <input type="range" class="form-range" id="customRange1" value={fieldEdit.value} onChange={(e) => setEdit({...fieldEdit, ["value"]: e.target.value})}/>
        <label className='form-label'>Maximum Value</label>
        <input className='form-control' type="number" value={fieldEdit.max} onChange={(e) => setEdit({...fieldEdit, ["max"]: e.target.value})} />
    </div>
    : ""
  )
}
