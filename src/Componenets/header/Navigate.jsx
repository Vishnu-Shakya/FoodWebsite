import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/Main.css'



const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/menu" className="logo">Foodies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > < Link to='/' className="mainmenu">Home</Link> </Nav.Link>
                            <Nav.Link > < Link to='/menu' className="mainmenu">Menu</Link> </Nav.Link>
                            <Nav.Link > < Link to='/about' className="mainmenu">About</Link> </Nav.Link>
                            <Nav.Link > < Link to='/contact' className="mainmenu">Contact</Link> </Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation