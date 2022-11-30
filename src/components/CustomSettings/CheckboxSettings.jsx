import React from 'react'

export default function CheckboxSettings({ fieldEdit, setEdit }) {
  return (
    fieldEdit?.tag === "checkbox"?
    <div class="col">
        <div className='form-check'>
            <input class="form-check-input" type="checkbox" checked={fieldEdit.checked} onClick={(e) => setEdit({...fieldEdit, ["checked"]: e.target.value})} id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                Keep the box checked?
            </label>
        </div>
    </div>
    : ""
  )
}
