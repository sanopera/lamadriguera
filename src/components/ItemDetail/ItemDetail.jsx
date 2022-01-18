import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

  const [show, setshow] = useState(true)

  const onAdd = () =>
  {
    setshow(false)
  }

  console.log(show);

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
            <center><Link to='/cart'><Button>Terminar la compra</Button></Link>
            <Link to='/'><Button>Continuar la Compra</Button></Link></center>
          </div>
          }
        </div>
        

      </Card>
    </div>
  );
}

export default ItemDetail;
