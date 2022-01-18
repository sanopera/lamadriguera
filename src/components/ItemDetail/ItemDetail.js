import { useState, Link } from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({ producto }) {

  const [show, setShow] = useState(true)

  const onAdd = (counter) =>
  {
    setShow(false)
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

          {show ? <ItemCount min={1} max={10} onAdd={onAdd} /> : <Link to='/'><button>Terminar la Compra</button></Link>

        }

        </ListGroup>
      </Card>
    </div>
  );
}

export default ItemDetail;
