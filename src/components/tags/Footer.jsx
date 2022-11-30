import React from 'react'

export default function Footer({ field }) {
  return (
    field?.tag === "footer"?
    <footer className='g-col-12'>
      <p className='text-center'>{field.text}<br/>{field?.url?<a href={field.url} target="_blank">{field.a}</a>:""}</p>
    </footer>
    : ""
  )
}
