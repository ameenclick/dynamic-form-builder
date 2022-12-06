import React, { useEffect } from 'react'

export default function HeadTextSettings({ fieldEdit, setEdit }) {
  useEffect(() => {
    if(fieldEdit?.type === "Head") setEdit({...fieldEdit, ["fontSize"]: "fs-1"})
    else setEdit({...fieldEdit, ["fontSize"]: "fs-5"})
  }, [fieldEdit?.type])
  
    return (
        fieldEdit?.tag === "static"?
        <div>
            {
            fieldEdit?.type === "Head"?
            <div className='mb-2'>
                <label className='form-label'>Head</label>
                <input className='form-control' placeholder='Enter your text' value={fieldEdit.text} onChange={(e) => setEdit({...fieldEdit, ["text"]: e.target.value})} />
            </div>    
                :
            <div className='mb-2'>
                <label className='form-label'>Text</label>
                <textarea className='form-control' placeholder='Enter your text' onChange={(e) => setEdit({...fieldEdit, ["text"]: e.target.value})} row="3">{fieldEdit.text}</textarea>
            </div>
                }
            <div className='mb-2'>
                <label className='form-label'>Type of Text</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => setEdit({...fieldEdit, ["type"]: e.target.value})}>
                    <option value="Head" selected={fieldEdit.type === "Head"}>Head</option>
                    <option value="Text" selected={fieldEdit.type === "Text"}>Text</option>
                </select>
            </div>
            <div className='mb-2'>
                <label className='form-label'>Font Size</label>
                {fieldEdit?.type === "Head"?
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setEdit({...fieldEdit, ["fontSize"]: e.target.value})}>
                    <option value="fs-1" selected={fieldEdit.fontSize === "fs-1"}>fs-1</option>
                    <option value="fs-2" selected={fieldEdit.fontSize === "fs-2"}>fs-2</option>
                    <option value="fs-3" selected={fieldEdit.fontSize === "fs-3"}>fs-3</option>
                    <option value="fs-4" selected={fieldEdit.fontSize === "fs-4"}>fs-4</option>
                    </select>
                    :
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setEdit({...fieldEdit, ["fontSize"]: e.target.value})}>
                    <option value="fs-5" selected={fieldEdit.fontSize === "fs-5"}>fs-5</option>
                    <option value="fs-6" selected={fieldEdit.fontSize === "fs-6"}>fs-6</option>
                    </select>
                }
            </div>
        </div>
        :""
  )
}
