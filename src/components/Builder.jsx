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

const Builder = ({setPreview}) => {
    const { form } = useGlobalContext();

    useEffect(() =>(
        document.body.style.backgroundImage=null,
        document.body.style.overflow='hidden'

    ))
    
    return(
    <>
        <div className="row" style={{height: "680px"}}>
            <Fields />
            <div className='water-mark'>
                {
                    !form?.fields?.length?
                    <NewWaterMark />
                    :
                    <FormGrid />
                }
            </div>
        </div>
        <GridNav />
        <AlertToast />
        <ParametersCanvas scroll={true} backdrop={false} placement={'end'} name={'Enable body scrolling'} setPreview={setPreview}/>
    </>
    )
};

export default Builder