import React, { useState, useContext, useEffect, useRef } from 'react'

const AppContext = React.createContext();

function AppProvider({ children }) {

  //States to manage Offset field parameters
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [selected, setSelected] = useState(undefined)

  //State to manage form
  const [form, setForm] = useState({
    title: "",
    description: "",
    grid: 1,
    fields: []
  })
  //Checking the change
  useEffect(()=>{
    console.log("form",form.fields[selected])
  }, [])

  //State to manage the fields
  const fields = {
    "input": { 
        "tag": "input",
        "label": "Input Field",
        "placeholder": "Placeholder",
        "columns": "col-4",
        "colSize": "form-control",
        "type": "text",
        "required": false,
        "icon": {
            "span": "prefix",
            "svg": undefined
        }
    },
    "textarea": {
        "tag": "textarea",
        "label": "Text Area",
        "placeholder": "Placeholder",
        "columns": "col-4",
        "rows": 2,
        "colSize": "form-control",
        "type": "text",
        "required": false,
    },
    "dropdown": {
        "tag": "dropdown",
        "label": "Dropdown",
        "placeholder": "Placeholder",
        "choices": [{
                label:"One",
                value: 1
            },
            {
                label:"Two",
                value: 2
            },
            {
                label:"Three",
                value: 3
            }],
        "columns": "col-4",
        "colSize": "form-select",
        "type": "text",
        "required": false,
    },
    "checkbox": {
        "tag": "checkbox",
        "label": "My Checkbox",
        "value": "Check the Value",
        "required": false,
        "checked": false,
        "disabled": false
    },
    "radio": {
        "tag": "radio",
        "label": "Radio Field",
        "inline": "form-check-inline",
        "value": "",
        "choices": ["choice1","choice2"],
        "required": false,
        "checked": false,
    },
    "static": {
        "tag": "static",
        "type": "Head",
        "fontSize": "fs-1",
        "color": "text-dark",
        "text": "Field Body",
    },
    "rateing": {
        "tag": "rateing",
        "value": 0, 
        "max": 100,
        "label": "Progress Bar" 
    },
    "image": {
        "tag": "image",
        "height": 100,
        "width": 100,
        "alignCenter": true,
        "src": "",
        "alt": "Image is not loaded yet!"
    },
    "url": {
        "tag": "url",
        "url": "https://samplelink.com",
        "text": ""
    },
    "footer": {
        "tag": "footer",
        "url":"",
        "a":"",
        "text": "All the copy right of the form is reserved to Cloud4C"
    }
  };

  //State to manage field to edit
  const [fieldEdit, setEdit] = useState({})

  useEffect(() => {
    if(selected>=0)
    {
        setEdit(form.fields[selected])
    }
    else
    {
        setEdit({})
    }
  }, [selected])

  //Making Fields Dragable
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dragOverIndex, setDragOverIndex]=useState()

  const dragStart = (e, position) => {
      dragItem.current = position;
      //console.log(e.target.innerHTML);
    };

  const dragEnter = (e, position) => {
      dragOverItem.current = position;
      setDragOverIndex(position)
      //console.log(e.target.innerHTML);
    };

  function drop(tag){
    if(!tag)
    {
        var copyListItems = [...form.fields,];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setDragOverIndex(null)
        setForm({...form,["fields"]: copyListItems});
    }
    else
    {
        var copyListItems = [...form.fields,];
        const dragItemContent = tag
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setForm({...form,["fields"]: copyListItems});
    }
      
    };

  //Delete field
  const deleteField = () => {
    var formList=form.fields
    formList.splice(selected,1)
    setForm({...form,["fields"]:formList})
    setSelected(undefined)
    setEdit({})
  }

    return (
        <AppContext.Provider
            value={{ 
                show, handleClose, toggleShow,
                form, setForm,
                fields, selected, setSelected, fieldEdit, setEdit, deleteField,
                dragStart, dragEnter, dragOverIndex, drop
             }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider }