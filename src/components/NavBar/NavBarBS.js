import React from "react"
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget";
import './NavBarBS.css';
import { CartContext } from '../../context/cartContext.jsx';
import { useContext } from 'react';

const NavBarBS = () => {

    const { totalCantidad } = useContext(CartContext)

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/' className="Link"> <Navbar.Brand>La Madriguera</Navbar.Brand> </Link>
                <img src='../logoMadriguera.png' alt="logo"/>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/categoria/Harry Potter" className="Link">Harry Potter</Nav.Link>
                    <Nav.Link as={Link} to="/categoria/Marvel" className="Link">Marvel</Nav.Link>
                    <Nav.Link as={Link} to="/categoria/Funko"  className="Link">Funko</Nav.Link>
                </Nav>

                {totalCantidad() === 0 ? (<div>

                </div>) : (
                    <div className="posicion-carrito">
                        <Link to='/cart'>
                            <CartWidget />
                        </Link>
                        <h6 className="contador2">{totalCantidad()}</h6>
                    </div>
                )}
            </Container>
        </Navbar>
    )


}

export default NavBarBS