import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Fields from "./Fields";
import GridNav from "./GridNav";
import NewWaterMark from "./NewWaterMark";
import ParametersCanvas from "./ParametersCanvas";
import { useGlobalContext } from "../Context";
import FormGrid from "./FormGrid";
import AlertToast from "./CustomSettings/AlertToast";
import { useEffect } from "react";
import Helmet from "react-helmet";

const Builder = ({setPreview}) => {
    const { form, handleEdit } = useGlobalContext();

    useEffect(() =>(
        document.body.style.backgroundImage=null,
        document.body.style.overflow='hidden'
    ),[])
    
    return(
    <>
        <Helmet>
            <title>
                Form Builder
            </title>
        </Helmet>
        <div onClick={handleEdit}>
            <div className="row" style={{height: "680px"}}>
                <Fields />
                <div className='water-mark'>
                    {
                        form?.fields?.length===0?
                        <NewWaterMark />
                        :
                        <FormGrid />
                    }
                </div>
            </div>
            {
                screen.width > 500?
                <GridNav />
                :""
            }
        </div>
        <AlertToast />
        <ParametersCanvas scroll={true} backdrop={false} placement={'end'} name={'Enable body scrolling'} setpreview={setPreview}/>
    </>
    )
};

export default Builder