import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget";


const NavBarBS = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">La Madriguera</Navbar.Brand>
                <img src='./logoMadriguera.png' alt="logo" width="35"/>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Universos</Nav.Link>
                    <Nav.Link href="#pricing">Madribox</Nav.Link>               
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )


}

export default NavBarBS