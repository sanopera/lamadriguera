import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarBS from "./components/NavBar/NavBarBS";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";

const App = () => {
  const bienvenida = "Bienvenidos/as a La Madriguera";

  return (
    <BrowserRouter>
      <NavBarBS />

      <Routes>
        
        <Route exact path='/' element={<ItemListContainer bienvenida={bienvenida} />} />
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer bienvenida={bienvenida} />} />
        
        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
