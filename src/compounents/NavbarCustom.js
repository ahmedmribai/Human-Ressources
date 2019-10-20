import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav , Button, FormControl , Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarCustom = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><Link to = "/">Human Resources</Link></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to ="/workers">Workers</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to = "/holidays">Holidays</Link></Nav.Link>
            </Nav>
      </Navbar>
    );

}

export default NavbarCustom;