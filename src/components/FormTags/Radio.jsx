import React from 'react'

export default function Radio({ field, findex, setChoice }) {
  return (
    field.tag === "radio"?
        <div className="mb-3">
        <label className="form-label">{field.label}</label><span className='text-danger'>{field.required?"*":""}</span><br/>
        {
            field.choices.map((choice,index) =>
            <div className={`form-check ${field.inline}`} key={index}>
                <input className="form-check-input" type="radio" name={`radio${findex}`} onClick={(e) => {setChoice(e.target.value)}} value={choice} required={field.required}/>
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
