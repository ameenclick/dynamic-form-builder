import React from 'react'

export default function Radio({ field, findex, setChoice }) {
  return (
    field.tag === "radio"?
        <div class="mb-3">
        <label class="form-label">{field.label}</label><br/>
        {
            field.choices.map((choice,index) =>
            <div class={`form-check ${field.inline}`} key={index}>
                <input class="form-check-input" type="radio" name={`radio${findex}`} onClick={(e) => {setChoice(e.target.value)}} value={choice}/>
                <label class="form-check-label" for="flexRadioDefault1">
                {choice}
                </label>
            </div>
            )
        }
        </div>
        :""
  )
}
