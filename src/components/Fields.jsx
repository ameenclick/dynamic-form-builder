import React from 'react'

import builder from "../builder.module.css"


import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import Tooltip from 'react-bootstrap/Tooltip';
import { useGlobalContext } from '../Context';

export default function Fields() {
      const {fields, form ,setForm, drop} = useGlobalContext();

      return (
        <aside className={`${builder["icons-inner"]} rounded-bottom`}>
                <div className="bg-primary">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip id="button-tooltip">
                                Input Field
                            </Tooltip>
                        }
                        >
                        <button className="btn btn-light mx-2 my-2 mt-4" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.input]})}
                            onDragEnd={() => drop(fields.input)}
                            draggable>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-input-cursor-text" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2z"/>
                                <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z"/>
                            </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        
                        overlay={
                            <Tooltip id="button-tooltip">
                                Textarea
                            </Tooltip>
                        }
                    >
                    <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.textarea]})}
                            onDragEnd={() => drop(fields.textarea)}
                            draggable>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-textarea-t" viewBox="0 0 16 16">
                        <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z"/>
                        </svg>
                    </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        
                        overlay={
                            <Tooltip id="button-tooltip">
                                Dropdown
                            </Tooltip>
                        }
                        >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.dropdown]})}
                            onDragEnd={() => drop(fields.dropdown)}
                            draggable>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Radio Button
                                </Tooltip>
                            }
                            >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.radio]})}
                            onDragEnd={() => drop(fields.radio)}
                            draggable>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-ui-radios" viewBox="0 0 16 16">
                            <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Checkbox
                                </Tooltip>
                            }
                            >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.checkbox]})}
                            onDragEnd={() => drop(fields.checkbox)}
                            draggable>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-ui-checks" viewBox="0 0 16 16">
                            <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Heading/Text
                                </Tooltip>
                            }
                            >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.static]})}
                            onDragEnd={() => drop(fields.static)}
                            draggable>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
                        </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Range
                                </Tooltip>
                            }
                            >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.rateing]})}
                            onDragEnd={() => drop(fields.rateing)}
                            draggable>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Image
                                </Tooltip>
                            }
                            >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.image]})}
                            onDragEnd={() => drop(fields.image)}
                            draggable>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-image" viewBox="0 0 16 16">
                                <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
                            </svg>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Url Redirect
                                </Tooltip>
                            }
                            >
                            <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.url]})}
                            onDragEnd={() => drop(fields.url)}
                            draggable>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                            </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Footer/Disclaimer
                                </Tooltip>
                            }
                            >
                        <button className="btn btn-light mx-2 my-2" 
                            onClick={() => setForm({ ...form, ["fields"]: [...form.fields,fields.footer]})}
                            onDragEnd={() => drop(fields.footer)}
                            draggable>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-align-bottom" viewBox="0 0 16 16">
                                <rect width="4" height="12" x="6" y="1" rx="1"/>
                                <path d="M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z"/>
                            </svg>
                        </button>
                    </OverlayTrigger>
                </div>
            </aside>
    )
}
