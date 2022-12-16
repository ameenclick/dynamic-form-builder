import React from 'react'
import { icons } from '../constants/icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { names } from '../constants/icons';
import InputGroup from 'react-bootstrap/InputGroup';

export default function InputSettings({ fieldEdit , setEdit}) {
  return (
    fieldEdit?.tag === "input"?
        <div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Placeholder
            </label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter placeholder"
                value={fieldEdit["placeholder"]} onChange={(e) => setEdit({...fieldEdit,["placeholder"]: e.target.value})}/>
            </div>
            <div className='mb-3 col'>
                <select class="form-select mb-3" aria-label="Default select example" title="Expected field type" 
                  onChange={(e) => setEdit({...fieldEdit,["type"]: e.target.value})}><span className='text-danger'>*</span>
                  <option value="" selected={fieldEdit.type===""}>Choose Type</option>
                  <option value="email" selected={fieldEdit.type==="email"}>Email</option>
                  <option value="text" selected={fieldEdit.type==="text"}>Text</option>
                  <option value="password" selected={fieldEdit.type==="password"}>Password</option>
                  <option value="number" selected={fieldEdit.type==="number"}>Number</option>
                  <option value="date" selected={fieldEdit.type==="date"}>Date</option>
                  <option value="datetime-local" selected={fieldEdit.type==="datetime-local"}>Datetime-local</option>
                  <option value="file" selected={fieldEdit.type==="file"}>File</option>
                  <option value="month" selected={fieldEdit.type==="month"}>Month</option>
                  <option value="range" selected={fieldEdit.type==="range"}>Range</option>
                  <option value="tel" selected={fieldEdit.type==="tel"}>Telephone</option>
                  <option value="time" selected={fieldEdit.type==="time"}>Time</option>
                  <option value="url" selected={fieldEdit.type==="url"}>Url</option>
                </select>
            </div>
            <div class="mb-3 col">
              <select class="form-select" aria-label="Default select example" onChange={(e) => setEdit({...fieldEdit,["colSize"]: e.target.value})} >
                <option value="form-control" selected={fieldEdit.colSize === "form-control"}>Choose Size</option>
                <option value="form-control form-control-lg" selected={fieldEdit.colSize === "form-control form-control-lg"}>Large</option>
                <option value="form-control" selected={fieldEdit.colSize === "form-control"}>Medium</option>
                <option value="form-control form-control-sm" selected={fieldEdit.colSize === "form-control form-control-sm"}>Small</option>
              </select>
            </div>
            <div className='mb-3 col'>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title={fieldEdit?.icon?.svg?icons[fieldEdit.icon.svg]:"Icons"}
                  id="input-group-dropdown-1"
                >
                  <div className='text-center' style={{ height: "200px", overflowY: "scroll"}}>
                    <Dropdown.Item href="#" onClick={() => setEdit({...fieldEdit, ["icon"]: { span: fieldEdit?.icon?.span, svg: null}})}
                    >
                     Remove Icons
                    </Dropdown.Item>
                    {
                      icons.map((icon, index) =>
                        <Dropdown.Item href="#" key={index} onClick={() => {console.log(index); setEdit({...fieldEdit, ["icon"]: { span: fieldEdit?.icon?.span, svg: index}})}}
                            >
                            {icon}{" "+names[index]}
                        </Dropdown.Item>
                      )
                    }
                  </div>
                </DropdownButton>
                <select class="form-select" aria-label=".form-select-lg example" 
                  onChange={(e) => setEdit({...fieldEdit, ["icon"]: {
                  span: e.target.value,
                  svg: fieldEdit?.icon?.svg
                    }})}>
                <option value="prefix" selected={fieldEdit?.icon?.span==="prefix"}>Prefix</option>
                <option value="sufix" selected={fieldEdit?.icon?.span==="sufix"}>Sufix</option>
              </select>
              </InputGroup>
            </div>
            </div>
          :""
  )
}
