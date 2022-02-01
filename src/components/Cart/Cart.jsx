import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./Cart.css";
import Resume from "../Resume/Resume";

export const Cart = () => {
  const { cartList, vaciarCarrito, totalPrecio, totalCantidad, eliminarProducto } = useContext(CartContext);
  const [condicional, setCondicional] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: '',
    name: '',
    phone: '',
    address: ''
  });

  const [idOrder, setIdOrder] = useState('');

  const realizarCompra = async (e) => {
    e.preventDefault()

    let order = {}


    order.buyer = dataForm
    order.total = totalPrecio();

    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad

      return { id, title, price, cantidad }
    })


    const db = getFirestore()

    const oredenCollection = collection(db, 'ordenes')
    await addDoc(oredenCollection, order)
      .then(resp => setIdOrder(resp.id))
      .catch(err => console.log(err))

    setCondicional(true)
    vaciarCarrito()
  }


  function handleChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }


  return (

      <div>

        {
          condicional ?
            (<Resume idOrder={idOrder} />)
            :

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
                          {cartList.map((prod) => (<div key={prod.id}>

                            <li> Nombre : {prod.title} Precio: ${prod.price} Cantidad: {prod.cantidad} <img src={prod.pictureUrl} width="70" /> <button onClick={() => eliminarProducto(prod.id)}>X</button> </li>

                          </div>))}
                        </center>
                      </ListGroup.Item>
                    </ListGroup>


                    <center> <h3>Total : ${totalPrecio()}</h3> </center>

                    <center><Link to="/"><Button>Continuar comprando</Button></Link> <Button onClick={vaciarCarrito} className="vaciar">Vaciar Carrito</Button></center>

                    <center><form onSubmit={realizarCompra}>
                <br /><input
                  type='text'
                  name='name'
                  placeholder='name'
                  onChange={handleChange}
                  value={dataForm.name}
                /><br />
                <input
                  type='text'
                  name='phone'
                  placeholder='tel'
                  onChange={handleChange}
                  value={dataForm.phone}
                /><br />
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  onChange={handleChange}
                  value={dataForm.email}
                /><br />
                <input
                  type='text'
                  name='address'
                  placeholder='address'
                  onChange={handleChange}
                  value={dataForm.address}
                /><br />
                <br /><center><button className="generar">Generar Orden</button></center>
              </form></center>


                    </div>)
                  }
             </div>
        }

      </div>

  )
};
