import React from 'react'

export default function HeadText({ field }) {
  return (
    field?.tag === "static"?
    <div className='col mb-2'>
        <p class={field.fontSize+" "+field.color+" "}>
            {field.text}
        </p>
    </div>
    : ""
  )
}
