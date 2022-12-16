import React, { useEffect } from 'react'
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
import { useGlobalContext } from '../Context';
//import './Preview.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Share from './Share';
import Helmet from "react-helmet"
import { url } from '../../config';

export default function Preview({setPreview}) {
    const {form,saveForm} = useGlobalContext();
    var grid;

    if(form.grid === 1)
    { 
        grid={
        col:"col-12",
        width: ((screen.width>900)?"50%": ((screen.width>700)? "75%":"100%"))
        }
    }
    else if(form.grid === 2){
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
        document.body.style.backgroundImage=`url('${url.domain}/assets/images/Cloud (1).jpg')`,
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
        <title>Preview</title>
    </Helmet>
    <Share />
    <div className='fixed-bottom m-3'>
        <div className='input-group' style={{ marginLeft: "90%"}}>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={
                  <Tooltip id="button-tooltip">
                      Builder
                  </Tooltip>
              }
              >
            <button className='btn btn-primary' onClick={()=>{setPreview(false)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                  <Tooltip id="button-tooltip">
                      Save & Share
                  </Tooltip>
              }
              >
            <button className='btn btn-success' onClick={saveForm}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-check" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                </svg>
            </button>
            </OverlayTrigger>
        </div>
    </div>
    <div className='container d-flex justify-content-center '>
        <div class= 'card m-3 border'  style={{ width: grid.width}}>
            <div class="card-body">
                <h2 class="card-title text-center m-4">{form.title}</h2>
                <h4 className='m-1'>{form.description}</h4>
                <Row>
                {
                    form?.fields?.map((field, index) => 
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
                    </div>
                    )
                }
                </Row>
                <button className='btn btn-primary d-flex float-end m-3'>
                    Submit
                </button>
            </div>
        </div>
    </div>
    </>
  )
}
