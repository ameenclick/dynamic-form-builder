import React from 'react'
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

export default function Preview() {
    const {form} = useGlobalContext();
    var grid;
    if(form.grid === 1)
    { 
        grid={
        col:"col-12",
        width: "50%"
        }
    }
    else if(form.grid === 2){
        grid={
            col:"col-lg-6 col-12",
            width: "75%"
            }
    }
    else{
        grid={
            col:"col-lg-4  col-12",
            width: "100%"
            }
    } 

  return (
    <div className='container'>
        <div class={`card my-5 rounded`} style={{ width: grid.width}}>
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
  )
}
