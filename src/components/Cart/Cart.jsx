import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import "./Cart.css";

export const Cart = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (
        <div>

            <ListGroup className='lista'>
            <ListGroup.Item><center>{cartList.map(prod => <li key={prod.id}>{prod.title} {prod.cantidad}  {prod.price} <img src={prod.pictureUrl} width="70" /></li>)}</center></ListGroup.Item>
            </ListGroup>

                <center><Button onClick={vaciarCarrito} className='vaciar'>Vaciar Carrito</Button></center>

                <center><Link to='/'><Button>Volver</Button></Link></center>
        </div>
    )
}
