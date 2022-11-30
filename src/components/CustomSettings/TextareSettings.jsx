import React from 'react'

export default function TextareSettings({ fieldEdit, setEdit}) {
  return (
    fieldEdit?.tag === "textarea"?
        <div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Placeholder
            </label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter placeholder"
                value={fieldEdit["placeholder"]} onChange={(e) => setEdit({...fieldEdit,["placeholder"]: e.target.value})}/>
            </div>
            <div class="col mb-3">
            <select class="form-select" aria-label="Default select example" title="Number of column field acquire" onChange={(e) => setEdit({...fieldEdit, ["rows"]: e.target.value})}><span className='text-danger'>*</span>
                <option value="" selected>Choose Rows</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
            </select>
            </div>
        </div>
    : ""
  )
}
