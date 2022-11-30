import React from 'react'

export default function Dropdown({ field, index }) {
  return (
    field?.tag === "dropdown"?
        <div class="mb-3">
        <label class="form-label">{field.label}</label>
        <select class={field.colSize+" "+field.columns} name={`${field.tag}${index}`} aria-label="Default select example" >
            <option selected>Make a choice</option>
            {
                field.choices.map((choice,choiceI) =>
            <option value={choice.value} key={choiceI}>{choice.label}</option>
                )
            }
        </select>
        </div>
        :""
  )
}
