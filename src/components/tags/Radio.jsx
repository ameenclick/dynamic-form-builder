import React from 'react'

export default function Radio({ field, findex }) {
  return (
    field.tag === "radio"?
        <div className="mb-3">
        <label className="form-label">{field.label}</label><br/>
        {
            field.choices.map((choice,index) =>
            <div className={`form-check ${field.inline}`} key={index}>
                <input className="form-check-input" type="radio" name={`radio${findex}`} id="flexRadioDefault1" value={field.value}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                {choice}
                </label>
            </div>
            )
        }
        </div>
        :""
  )
}
