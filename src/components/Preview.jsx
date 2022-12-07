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
import './Preview.css';
//import cloudimage from '../public/assets/images/Cloud.jpg';

export default function Preview({setPreview}) {
    const {form} = useGlobalContext();
    var grid;
    if(form.grid === 1)
    { 
        grid={
        col:"col-12",
        width: window.screen.width<700?"100%":"50%"
        }
    }
    else if(form.grid === 2){
        grid={
            col:"col-lg-6 col-md-6 col-12",
            width: window.screen.width<500?"100%":"75%"
            }
    }
    else{
        grid={
            col:"col-lg-4 col-md-4 col-12",
            width: "100%"
            }
    }

    useEffect(() =>{
        document.body.style.backgroundImage="url('./assets/images/Cloud (1).jpg')",
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundAttachment="fixed"
        document.body.style.height="100vh";
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundPosition="center center"
        document.body.style.overflow='auto';
    },[])
  return (
    <>
    <div className='container d-flex justify-content-center '>
        <div class= 'card'  style={{ width: grid.width}}>
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
            </div>
        </div>
    </div>
     {/* <div className='mb-3'>
     <footer class="blockquote-footer">
        <img className='img-fluid' src="./assets/images/Cloud.jpg" width='100%'/>
     </footer>
    </div> */}
    </>
  )
}
