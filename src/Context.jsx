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
  const [apiResponse, setResponse] = useState(null)
  
  const [formData, setFormData] = useState({})
  //State to manage form
  const [form, setForm] = useState({
    title: "",
    description: "",
    grid: 1,
    fields: []
  })

  //Checking the change
  useEffect(()=>{
    if(localStorage.getItem("form")) setForm(JSON.parse(localStorage.getItem("form")))
    if(localStorage.getItem("formData")) setFormData(JSON.parse(localStorage.getItem("formData")))
    if(localStorage.getItem("workingId") && !workingId) setWorking(localStorage.getItem("workingId"))
  }, [])

  //Update WorkingID when there is a change
  useEffect(() => {
    if(workingId) localStorage.setItem("workingId",workingId)
  }, [workingId])

  //Taking a backup in cache to avoide accidential loss
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form))
  },[form])

  //Taking a backup in cache to avoide accidential loss
  useEffect(() => {
    //console.log(formData)
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

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
            "headers": [],
            "objects": [""],
            "label": "label",
            "value": "value",
            "data": "",
        },
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
        "disabled": false,
    },
    "radio": {
        "tag": "radio",
        "label": "Radio Field",
        "inline": "form-check-inline",
        "choices": ["choice1","choice2"],
        "required": false,
        "checked": false
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
        "response": 0,
        "required": false
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
    };

  const dragEnter = (e, position) => {
      dragOverItem.current = position;
      setDragOverIndex(position)
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

    //Handle API call for Dropdown Settings
    const handleFetch = (props) => {
        if(fieldEdit?.api?.url)
        {
            let customHeaders={
                "Content-Type": "application/json"
            }
            //Fetching multiple headers if any
            for(var i=0;i<fieldEdit?.api?.headers.length; i++)
            {
                customHeaders[fieldEdit?.api?.headers[i].key]=fieldEdit?.api?.headers[i].value
            }
            var axiosConfig ={
                url: fieldEdit?.api?.url,
                method: fieldEdit?.api?.method,
                headers: customHeaders,
                responseType: 'json',
            } 
            if(fieldEdit?.api?.method === "POST") axiosConfig["data"]=JSON.stringify(fieldEdit?.api?.data)
            axios(axiosConfig)
            .then((res) => {
                setResponse(res.data)
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

    //Creating Form
    const saveForm = () => {
        //Create new form
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
            //Update already created form
            updateForm(workingId);
        }
        setShare(true)
    }

    //Activate the form
    function formActivate(id,data){
        axios.post(url.API+"Form/Status/"+id, data, {
            headers: { 'Content-Type': 'application/json'}
        })
        .then((res) => {
            if(res.data._id)
            {
                setAlert({
                    show: true, 
                    message: data.active?"Form Activated":"Form Deactivated",
                    type: data.active?"success":"warning"
                })
            }
        }).catch((err) => {
            console.log(err)
            setAlert({
                show: true, 
                message: "Process failed : "+err.message,
                type: "danger"
            })
        })
    }

    //Function to update contents of the form
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
            else if(res.status === 205)
            {
                setAlert({
                    show: true, 
                    message: "Form already saved",
                    type: "info"
                })
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
                if(res.data._id){
                    setForm(res.data.stack[res.data.stack.length-1]);
                    setFormData(res.data)
                    setWorking(id)
                }
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
                form, setForm, getForm,updateForm, onForm, setHover, saveForm,formData, setFormData,formActivate,
                selectedIndex, handleEdit,
                fields, selected, setSelected, fieldEdit, setEdit, deleteField,
                dragStart, dragEnter, dragOverIndex, drop,
                handleFetch, apiResponse,setResponse,
                alert, setAlert,
                showShare, setShare, workingId, setWorking,
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