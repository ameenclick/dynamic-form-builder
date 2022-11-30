import React from 'react'

export default function ImageSettings({ fieldEdit, setEdit }) {
  return (
    fieldEdit?.tag === "image"?
    <div className='col'>
        <div className='mb-2'>
            <label className='form-label'>Upload Image</label>
            <input type="file" className="form-control" placeholder="Image Path" onChange={
                (e) =>{
                    var file = e.target.files[0]
                    let reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = () => {
                    setEdit({...fieldEdit, ["src"]: reader.result
                        })
                    }
                    reader.onerror = function (error) {
                        console.log('Error: ', error);
                    }
                }
                }
            /> 
        </div>
        <div className='mb-2'>
            <label className='form-label mb-2'>Height</label>
            <input type="number" className="form-control" value={fieldEdit.height} onChange={(e) => setEdit({...fieldEdit, ["height"]: e.target.value})} min="0" max="100"/>
        </div>
        <div className='mb-2'>
            <label className='form-label mb-2'>Width</label>
            <input type="number" className="form-control" value={fieldEdit.width} onChange={(e) => setEdit({...fieldEdit, ["width"]: e.target.value})} min="0" max="100"/>
        </div>
        <div className='mb-2 form-check'>
            <input type="checkbox" className="form-check-input" value={fieldEdit.alignCenter} onChange={(e) => setEdit({...fieldEdit, ["alignCenter"]: !fieldEdit.alignCenter})} min="0" max="100"/>
            <label className='form-check-label mb-2'>Align Center</label>
        </div>
    </div>
    : ""
  )
}
