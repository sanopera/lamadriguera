import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css';


function Item({titulo, precio, foto}) {
  return (
    <div className="tarjeta">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={foto} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{precio}</Card.Text>
          <ItemCount min={1} max={10} />
          <center><Button variant="primary">Agregar al carrito</Button></center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
