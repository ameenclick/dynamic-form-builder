import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Checkbox from './tags/Checkbox';
import Dropdown from './tags/Dropdown';
import HeadText from './tags/HeadText';
import Input from './tags/Input';
import Radio from './tags/Radio';
import Textarea from './tags/Textarea';
import Progress from './tags/Progress';
import Image from './tags/Image';
import URL from './tags/URL';
import Footer from './tags/Footer';
import './Preview.css';
import axios from 'axios';
import { url } from '../../config';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { useRef } from 'react';

export default function Form() {

    const {id} = useParams();
    const [form,setForm] = useState({});
    
    useEffect(() => {
        if(id)
        {
            axios.get(url.API+"Form/"+id, {headers: { "Content-Type": "application/json"}})
            .then((res) => {
                if(res.data._id){
                    setForm(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])

    var grid;

    if(form?.grid === 1)
    { 
        grid={
        col:"col-12",
        width: ((screen.width>900)?"50%": ((screen.width>700)? "75%":"100%"))
        }
    }
    else if(form?.grid === 2){
        grid={
            col:"col-lg-6 col-12",
            width: ((screen.width>900)?"75%": ((screen.width>700)? "90%":"100%"))
            }
    }
    else{
        grid={
            col:"col-lg-4  col-12",
            width: "100%"
            }
    } 

    useEffect(() =>{
        document.body.style.backgroundImage="url('../assets/images/Cloud (1).jpg')",
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundAttachment="fixed"
        document.body.style.height="100vh";
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundPosition="center center"
        document.body.style.overflow='auto';
    },[])

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{form?.title+"  | Cloud4C Services"}</title>
    </Helmet>
    <div className='container d-flex justify-content-center '>
        {
            form?.active?
                    <div class= 'card m-3'  style={{ width: grid.width}}>  
                    <div class="card-body">
                        
                        <h2 class="card-title text-center m-4">{form?.title}</h2>
                        <h4 className='m-1'>{form.description}</h4>
                        <Row>
                        {
                            form?
                                form.fields?.map((field, index) => 
                                <div className={field.tag === "footer"?"":grid.col}  key={index}>
                                    <div class="mb-3" style={{ userSelect: "none" }}>
                                    <Input field={field} index={index}/>
                                    <Textarea field={field} index={index}/>
                                    <Dropdown field={field} index={index}/>
                                    <Radio field={field} findex={index}/>
                                    <Checkbox field={field} index={index} />
                                    <HeadText field={field} />
                                    <Progress field={field} index={index} />
                                    <Image field={field} />
                                    <URL field={field} />
                                    <Footer field={field} />
                                    </div>
                                </div>)
                            :
                            <div class="d-flex align-items-center justify-content-center spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
                        </Row>
                        <button className='btn btn-primary d-flex float-end m-3'>
                            Submit
                        </button>
                    </div>
                </div>
            :
            <div class= 'card m-3'  style={{ width: "50%"}}>  
                <div class="card-body">    
                <h5 class="card-title text-center m-4">Form no longer receiving response</h5>
                <p>Please Contact Form Owner</p>
                </div>
            </div>
        }
    </div>
    </>
  )
}
