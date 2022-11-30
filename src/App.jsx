import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css"
import Builder from "./components/Builder";

import "./index.css"
import BrandNav from "./components/BrandNav";
//import LandPage from "autoform/Landpage";
import { AppProvider } from "./Context";

const App = () => (
  <>
    <BrandNav />
    <React.StrictMode>
      <AppProvider>
        <Builder />
      </AppProvider>
    </React.StrictMode>
  </>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
