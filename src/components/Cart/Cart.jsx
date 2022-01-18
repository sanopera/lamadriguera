import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export const Cart = () => {
    return (
        <div>
            <center>Cart</center>
            <center><Link to='/'><Button>Volver</Button></Link></center>
        </div>
    )
}
