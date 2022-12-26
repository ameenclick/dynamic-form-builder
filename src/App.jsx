import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css"
import LandPage from "./Landpage"

import "./index.css";
import BrandNav from "./components/BrandNav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./components/Form";
import Main from "./components/Main";
import { AppProvider } from './Context';
import Forms from "./Forms";
import Response from "./components/Response";
import AvailableForms from "./components/AvailableForms";
import APIResponse from "./components/CustomSettings/APIResponse";

function App() {
return(
  <>
    <BrandNav/>
    <React.StrictMode>
        <AppProvider>
        <Router>
            <Routes>
                <Route path="/" element={<LandPage />} /> 
                <Route path="/Forms" element={<Forms />} />
                <Route path="/Builder" element={<Main />}> {/* Goto new Builder*/}
                </Route>
                <Route path="/Builder/:id" element={<Main />}> {/* Open stored form in Builder */}
                </Route>
                <Route path="/Form/:id" element={<Form />} />
                <Route path="/Response/:id" element={<Response />} />
                <Route path="/Respond/" element={<AvailableForms />} /> {/* List all active forms */}
            </Routes>
        </Router>
        </AppProvider>
    </React.StrictMode>
    </>)
};

ReactDOM.render(<App />, document.getElementById("app"));
