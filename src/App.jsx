import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.css"
import Builder from "./components/Builder";

import "./index.css"
import BrandNav from "./components/BrandNav";
//import LandPage from "autoform/Landpage";
import { AppProvider } from "./Context";
import Preview from "./components/Preview";

function App() {
return(
  <>
    <Router>
        <BrandNav/>
          <React.StrictMode>
            <AppProvider>
              <Routes>
                <Route path="/" element={<Builder />}/>
                <Route path="/Builder" element={<Builder />}/>
                <Route path="/Builder/Preview" element={<Preview />} />
              </Routes>
            </AppProvider>
          </React.StrictMode>
    </Router>
    </>)
};

ReactDOM.render(<App />, document.getElementById("app"));
