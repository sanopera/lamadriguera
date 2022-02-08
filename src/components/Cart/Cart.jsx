import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./Cart.css";
import Resume from "../Resume/Resume";
import { FaHandPointDown } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";

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

  const makePurchase = async (e) => {
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

    const queryCollection = collection(db, 'productos')

    const queryActulizarStock = query(
      queryCollection,
      where(documentId(), 'in', cartList.map(it => it.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
      })
      ))

    batch.commit()
    setCondicional(true)


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

    <div  className="centro">

      {
        condicional ?
          (<Resume idOrder={idOrder} />)
          :

          <div>
            {totalCantidad() === 0 ? (
              <div className="carritoVacio">
                <h3>Aun no agregaste nada <FaRegSadCry /></h3>
                <Link to="/">
                  <Button>Ir al catalogo</Button>
                </Link>

              </div>
            ) : (

              <div>
                <ListGroup className="lista">
                  <ListGroup.Item>
                    
                      {cartList.map((prod) => (<div key={prod.id}>

                        <li> Nombre : {prod.title} Precio: ${prod.price} Cantidad: {prod.cantidad} <img src={prod.pictureUrl} alt="" /> <button onClick={() => eliminarProducto(prod.id)}>X</button> </li>
                      </div>))}
                    
                  </ListGroup.Item>
                </ListGroup>


                 <h3>Total : ${totalPrecio()}</h3> 

                <Link to="/"><Button>Continuar comprando</Button></Link> <Button onClick={vaciarCarrito} className="vaciar">Vaciar Carrito</Button>

                <div>
                  <br /><h3>Completa tus datos para terminar la compra <FaHandPointDown /></h3><form className="form" onSubmit={makePurchase}>
                    <br /><input
                      type='text'
                      name='name'
                      placeholder='Nombre'
                      onChange={handleChange}
                      value={dataForm.name}
                    /><br />
                    <input
                      type='text'
                      name='phone'
                      placeholder='Telefono'
                      onChange={handleChange}
                      value={dataForm.phone}
                    /><br />
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      onChange={handleChange}
                      value={dataForm.email}
                    /><br />
                    <input
                      type='text'
                      name='address'
                      placeholder='Direccion'
                      onChange={handleChange}
                      value={dataForm.address}
                    /><br />
                    <br /><button className="generar">Generar Orden</button>
                  </form>
                </div>

              </div>)
            }
          </div>
      }

    </div>

  )
};
