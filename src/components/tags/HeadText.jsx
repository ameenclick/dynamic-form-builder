import React from 'react'

export default function HeadText({ field }) {
  return (
    field?.tag === "static"?
    <div className='col mb-2'>
        <p className={field.fontSize+" "+field.color+" "}>
            {field.text}
        </p>
    </div>
    : ""
  )
}
