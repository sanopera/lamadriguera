import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBar/NavBarBS';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  const bienvenida = "Bienvenidos/as a mi tienda"

  return (

    <div>
      <NavBarBS />
      <ItemListContainer bienvenida = {bienvenida} />

    </div>
    
  );
}

export default App;
