import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarBS from "./components/NavBar/NavBarBS";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from './context/cartContext';
import Carrousel from './components/Carrousel/Carrousel';


const App = () => {

  return (


    <CartContextProvider>
      <BrowserRouter>

        <NavBarBS />

        <Carrousel />

        <Routes>

          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />} />

          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </CartContextProvider>



  );
}

export default App;
