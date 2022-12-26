import React from 'react'

export default function Dropdown({ field, index }) {
  return (
    field?.tag === "dropdown"?
        <div className="mb-3">
        <label className="form-label">{field.label}</label><span className='text-danger'>{field.required?"*":""}</span>
        <select id={index} className={field.colSize+" "+field.columns} name={`${field.tag}${index}`} aria-label="Default select example" required={field.required}
         onChange={
            (e) => {
                console.log(e.target.value, document.getElementById("1").value)
            }
         }>
            <option value={""}>Make a choice</option>
            {
                field?.choices?.map((choice,choiceI) =>
            <option value={typeof(choice) === 'object'?choice[field?.api?.value]:choice} key={choiceI}>{typeof(choice) === 'object'?choice[field?.api?.label]:choice}</option>
                )
            }
        </select>
        </div>
        :""
  )
}
