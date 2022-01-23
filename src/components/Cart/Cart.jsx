import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartList, vaciarCarrito, totalPrecio, totalCantidad, eliminarProducto } = useContext(CartContext);

  console.log(cartList.cantidad)

  return (
    <div>

      {totalCantidad() === 0 ? (
        <div className="carritoVacio">
        <h3>Aun no agregaste nada :(</h3>
            <Link to="/">
              <Button>Ir al catalogo</Button>
            </Link>

        </div>
      ) : (
        <div>

          <ListGroup className="lista">
            <ListGroup.Item>
              <center>
                {cartList.map((prod) => ( <div key={prod.id}>

                    <li> Nombre : {prod.title} Precio: ${prod.price} Cantidad: {prod.cantidad} <img src={prod.pictureUrl} width="70" /> <button onClick={() => eliminarProducto(prod.id)}>X</button> </li>
                    
                </div> ))}
              </center>
            </ListGroup.Item>
          </ListGroup>

        
          <center> <h3>Total : ${totalPrecio()}</h3> </center> 

          <center><Button>Terminar la compra</Button> <Link to="/"><Button>Continuar comprando</Button></Link> <Button onClick={vaciarCarrito} className="vaciar">Vaciar Carrito</Button></center>


        </div>
      )}
    </div>
  );
};
