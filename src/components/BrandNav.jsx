import React from 'react'

import { Navbar } from "react-bootstrap"

export default function BrandNav({preview, setPreview}) {
  return (
    <Navbar bg="light" variant="light" className="border-bottom">
        <Navbar.Brand href="#home">
            <a href="/"> <img
            alt=""
            src="../assets/images/logo_0.png"
            width="25%"
            height="15%"
            className="d-inline-block align-top ms-2"
            /></a>
        </Navbar.Brand>
    </Navbar>
  )
}
