 //State to manage the fields

 form={
    title: "",
    description: "",
    grid: 1,
    fields: []
  }

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
        "name": "",
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