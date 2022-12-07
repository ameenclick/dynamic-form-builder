import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css"
import Builder from "./components/Builder";

import "./index.css";
import BrandNav from "./components/BrandNav";
//import LandPage from "autoform/Landpage";
import { AppProvider } from "./Context";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const[preview, setPreview] = useState(false)
return(
  <>
        <BrandNav preview={preview} setPreview={setPreview}/>
          <React.StrictMode>
            <AppProvider>
              {
                preview?
                <Preview setPreview={setPreview}/>
                :
                <Builder setPreview={setPreview}/>
              }
            </AppProvider>
          </React.StrictMode>
    </>)
};

ReactDOM.render(<App />, document.getElementById("app"));
