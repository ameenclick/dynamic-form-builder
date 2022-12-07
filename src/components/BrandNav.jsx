import React from 'react'

import { Nav, Navbar } from "react-bootstrap"

export default function BrandNav({preview, setPreview}) {
  return (
    <Navbar bg="light" variant="light" className="border-bottom">
        <Navbar.Brand href="#home">
            <img
            alt=""
            src="../assets/images/logo_0.png"
            width="25%"
            height="15%"
            className="d-inline-block align-top ms-2"
            />
        </Navbar.Brand>
        <Nav className='me-auto'>
          {
            preview?
            <button className='btn btn-outline-primary' onClick={()=>{setPreview(false)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>{" "}Builder
            </button>
            :""
          }
        </Nav>
    </Navbar>
  )
}
