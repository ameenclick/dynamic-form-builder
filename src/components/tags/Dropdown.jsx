import React from 'react'

export default function Dropdown({ field, index }) {
  return (
    field?.tag === "dropdown"?
        <div className="mb-3">
        <label className="form-label">{field.label}</label>
        <select className={field.colSize+" "+field.columns} name={`${field.tag}${index}`} aria-label="Default select example" >
            <option defaultValue={""}>Make a choice</option>
            {
                field?.choices?.map((choice,choiceI) =>
            <option value={typeof(choice) === 'object'?(field?.api?.value?choice[field?.api?.value]:choice[field?.api?.label]):choice} key={choiceI}>{typeof(choice) === 'object'?(field?.api?.label?choice[field?.api?.label]:choice[field?.api?.value]):choice}</option>
                )
            }
        </select>
        </div>
        :""
  )
}
