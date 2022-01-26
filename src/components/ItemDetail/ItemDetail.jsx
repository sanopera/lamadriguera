import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext.jsx';


const ItemDetail = ({ producto }) => {

  const  { cartList, agregarAlCarrito, mostrarCantidad } = useContext(CartContext)

  const [show, setshow] = useState(true)


  const onAdd = (counter) =>
  {
    setshow(false);
    agregarAlCarrito({...producto, cantidad: counter})
  }


  return (
    <div className="detalle">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.pictureUrl} />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem>{producto.price}</ListGroupItem>
          <ListGroupItem>Datelle 1</ListGroupItem>
          <ListGroupItem>Detalle 2</ListGroupItem>

        </ListGroup>
        <div>
          {show ? <ItemCount min={1} max={10} onAdd={onAdd}/> : 
          
          <div className='boton'>
            <center><Link to='/cart'><Button>Ir al carrito</Button></Link>
            <Link to='/'><Button>Continuar comprando</Button></Link></center>
          </div>
          }
        </div>
        

      </Card>
    </div>
  );
}

export default ItemDetail;
