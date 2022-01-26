import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ titulo, precio, foto, id }) {
  return (
    
    <div className="tarjeta">

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={foto} />

        <Card.Body >
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>${precio}</Card.Text>

          <Link to={`/detalle/${id}`}>
            <center>
              <Button variant="primary">Detalle de Producto</Button>
            </center>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
