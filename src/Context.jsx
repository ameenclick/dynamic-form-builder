import React, { useState, useContext, useEffect, useRef } from 'react'
import axios from 'axios';
import { url } from "../config"

const AppContext = React.createContext();

function AppProvider({ children }) {

  //States to manage Offset field parameters
  const [show, setShow] = useState(true);
  const [alert, setAlert] = useState({ 
                show:false,
                message: "",
                type: "",
            });
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [onForm, setHover] = useState(false);
  const [selected, setSelected] = useState(undefined)
  const [workingId, setWorking] = useState(null);
  const [showShare, setShare] = useState(false);
  const selectedIndex = useRef(null);

  //State to manage form
  const [form, setForm] = useState({
    title: "",
    description: "",
    grid: 1,
    active: true,
    fields: []
  })

  //Checking the change
  useEffect(()=>{
    if(localStorage.getItem("form")) setForm(JSON.parse(localStorage.getItem("form")))
    if(localStorage.getItem("workingId") && !workingId) setWorking(localStorage.getItem("workingId"))
  }, [])

  //Update WorkingID when there is a change
  useEffect(() => {
    if(workingId) localStorage.setItem("workingId",workingId)
  }, [workingId])

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form))
  },[form])

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
            "svg": null
        },
        "response": "" 
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
        "response": "" 
    },
    "dropdown": {
        "tag": "dropdown",
        "label": "Dropdown",
        "placeholder": "Placeholder",
        "choices": [
            {
                label:"One",
                value: 1
            },
            {
                label:"Two",
                value:2,
            },
            {
                label:"Three",
                value:3
            }],
        "api": {
            "url": "",
            "method": "GET",
            "headers": [
                {"key": "Authorization", "value": ""}
            ],
            "object": "",
            "label": "label",
            "value": "value",
            "data": "",
        },
        "columns": "col-4",
        "colSize": "form-select",
        "type": "text",
        "required": false,
        "response": "" 
    },
    "checkbox": {
        "tag": "checkbox",
        "label": "My Checkbox",
        "value": "Check the Value",
        "required": false,
        "checked": false,
        "disabled": false,
        "response": "" 
    },
    "radio": {
        "tag": "radio",
        "label": "Radio Field",
        "inline": "form-check-inline",
        "choices": ["choice1","choice2"],
        "required": false,
        "checked": false,
        "response": "" 
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
        "min": 0, 
        "max": 100,
        "label": "Progress Bar Out of 10",
        "response": 0 
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
  const [dragOverIndex, setDragOverIndex]=useState(null)

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
        setSelected(dragOverItem.current)
        setDragOverIndex(null)
        if(!tag)
        {
            var copyListItems = [...form.fields,];
            const dragItemContent = copyListItems[dragItem.current];
            copyListItems.splice(dragItem.current, 1);
            copyListItems.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
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

    //Handle API call
    const handleFetch = (props) => {
        if(fieldEdit?.api?.url)
        {
            var headers={}
            //Fetching multiple headers if any
            for(var i=0;i<fieldEdit?.api?.headers.length; i++)
            {
                headers[fieldEdit?.api?.headers[i].key]=fieldEdit?.api?.headers[i].value
            }
            console.log(headers)
            var axiosConfig ={
                url: fieldEdit?.api?.url,
                method: fieldEdit?.api?.method,
                headers: headers
            } 
            if(fieldEdit?.api?.method === "POST") axiosConfig["data"]=JSON.stringify(fieldEdit?.api?.data)
            axios.request(axiosConfig)
            .then((res) => {
                console.log(res)
                if(fieldEdit?.api?.object.length === 0)
                {
                    setAlert({
                        show: true, 
                        message: "Valid API, but empty or invalid object",
                        type: "secondary"
                    })
                }
                else
                {
                    setEdit({...fieldEdit, ["choices"]: res.data[fieldEdit?.api?.object]})
                    setAlert({
                        show: true, 
                        message: "Valid API, Updated the data successfully",
                        type: "success"
                    })
                    props.onHide()
                }
            })
            .catch((err) => {
                console.log(err)
                setAlert({
                    show: true, 
                    message: "API Fetch failed : "+err.message,
                    type: "danger"
                })
            })
        }
        else{
            setEdit({...fieldEdit, ["choices"]: ["One","Two","Three"]})
        }
    }

    const saveForm = (props) => {
        if(!workingId)
        {
            axios.post(url.API+"Form/Store", form, {
                headers: { 'Content-Type': 'application/json'}
            })
            .then((res) => {
                if(res.data._id)
                {
                    setAlert({
                        show: true, 
                        message: "Form Created Successfully",
                        type: "success"
                    })
                    setWorking(res.data._id);
                    localStorage.setItem("workingId",res.data._id)
                }
                else
                {
                    setAlert({
                        show: true, 
                        message: "Something went wrong",
                        type: "secondary"
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                setAlert({
                        show: true, 
                        message: "API failed : "+err.message,
                        type: "danger"
                    })
            })
        }
        else
        {
            updateForm(workingId);
        }
        setShare(true)
    }

    function updateForm(){
        axios.patch(url.API+"Form/"+arguments[0], arguments.length>1?arguments[1]:form, {
            headers: { 'Content-Type': 'application/json'}
        })
            .then((res) => {
                if(res.data._id)
                {
                    if(arguments.length>1)
                    {
                        setAlert({
                            show: true, 
                            message: arguments.length>1?arguments[1].active?"Form Activated":"Form Deactivated":"",
                            type: arguments.length>1?arguments[1].active?"success":"warning":""
                        })
                    }
                    else
                    {
                        setAlert({
                        show: true, 
                        message: "Form Updated Successfully",
                        type: "success"
                    })
                    }
                }
                else
                {
                    setAlert({
                        show: true, 
                        message: "Something went wrong",
                        type: "secondary"
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                setAlert({
                    show: true, 
                    message: "API failed : "+err.message,
                    type: "danger"
                })
            })

    }

    //Handle Form Selection
    const handleEdit = () => {
        if(selectedIndex.current>=0 && onForm){
            if (selected === selectedIndex.current){ 
                setSelected(null)
            }
            else {
                setSelected(selectedIndex.current);
            }
        }
        else
        {
            setSelected(null)
        }
        if(!show) toggleShow();
    }

    //Get a form by id
    function getForm(id){
        axios.get(url.API+"Form/"+id, {headers: { "Content-Type": "application/json"}})
            .then((res) => {
                console.log(res)
                if(res.data._id){
                    setForm(res.data);
                    setWorking(id)
                }
                console.log("Form")
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                form, setForm, getForm,updateForm, onForm, setHover, 
                selectedIndex, handleEdit,
                fields, selected, setSelected, fieldEdit, setEdit, deleteField,
                dragStart, dragEnter, dragOverIndex, drop,
                handleFetch, saveForm,
                alert, setAlert,
                showShare, setShare, workingId, setWorking
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