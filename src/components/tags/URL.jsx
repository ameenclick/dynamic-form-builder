import React from 'react'

export default function URL({field}) {
  return (
    field?.tag === "url"?
    <div className='col mb-2'>
      <a href={field.url} target="_blank">{field?.text?field.text:field.url}</a>
    </div>
    : ""
  )
}
