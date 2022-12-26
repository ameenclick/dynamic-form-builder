import React from 'react'

export default function Image({ field }) {
  return (
    field?.tag === "image"?
    <div className={`mb-2 ${field.alignCenter?"text-center":""}`}>
        <img src={field.src} className="img-fluid" height={field.height+"%"} width={field.width+"%"} alt={field.alt}></img>
    </div>
    : ""
  )
}
