import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBar/NavBarBS';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  const bienvenida = "Bienvenidos/as a mi tienda"

  return (

    <div>
      <NavBarBS />
      <ItemListContainer bienvenida = {bienvenida} />
      <ItemDetailContainer />

    </div>
    
  );
}

export default App;
