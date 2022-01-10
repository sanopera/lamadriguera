import React from "react"

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget";
import './NavBarBS.css';


const NavBarBS = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
            <Link to='/' className="Link"> <Navbar.Brand>La Madriguera</Navbar.Brand> </Link>
                <img src='../logoMadriguera.png' alt="logo" width="35"/>
                <Nav className="me-auto">
                    <Nav.Link> <Link to="/categoria/Harry Potter" className="Link">Harry Potter</Link> </Nav.Link>
                    <Nav.Link> <Link to="/categoria/Marvel" className="Link">Marvel</Link> </Nav.Link>
                    <Nav.Link> <Link to="/categoria/Funko" className="Link">Funko</Link> </Nav.Link>                 
                </Nav>

                <Link to='/cart'>
                <CartWidget />
                </Link>
                


            </Container>
        </Navbar>
    )


}

export default NavBarBS