import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Checkbox from './FormTags/Checkbox';
import Dropdown from './FormTags/Dropdown';
import HeadText from './FormTags/HeadText';
import Input from './FormTags/Input';
import Radio from './FormTags/Radio';
import Textarea from './FormTags/Textarea';
import Progress from './FormTags/Progress';
import Image from './FormTags/Image';
import URL from './FormTags/URL';
import Footer from './FormTags/Footer';
import './Preview.css';
import axios from 'axios';
import { url } from '../../config';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
export default function Form() {

    const {id} = useParams();
    const [form,setForm] = useState({});
    const [choice, setChoice] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    
    useEffect(() => {
        if(id)
        {
            console.log(id)
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

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    //Submit User Response
    function SubmitForm() {
        var response
        var responses=[]
        console.log("Submit Form")
        for(var i=0;i<form?.fields?.length;i++)
        {
            response={}
            if(form.fields[i].tag === "radio")
            {
                response[form.fields[i].label]= choice
            }
            else if(form.fields[i].tag === "checkbox")
            {
                response[form.fields[i].label]= document.getElementById(i).checked
            }
            else if(form.fields[i].label)
            {
                response[form.fields[i].label]= document.getElementById(i).value
            }
            responses=[...responses,response]
        }
        axios.post(url.API+"Form/Submit", {
            userId: makeid(10),
            formId: id,
            response: responses
        })
        .then((res) => {
            console.log(res)
            if(res.status==200) setSubmitted(true)
        })
        .catch(err => {
            console.log(err)
        })

    }

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
    {
        submitted?
        <div className='container d-flex justify-content-center '>
            <div class= 'card m-3'  style={{ width: grid.width}}>  
                <div class="card-body">    
                <h5 class="card-title text-center m-4">Your response submitted</h5>
                <p>Thank you for response</p>
                </div>
            </div>
        </div>
        :
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
                                    <Radio field={field} findex={index} setChoice={setChoice}/>
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
                        <button className='btn btn-primary d-flex float-end m-3' onClick={() => { SubmitForm()}}>
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
    }
    </>
  )
}
