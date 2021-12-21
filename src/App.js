import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBar/NavBarBS';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (

    <div>
      <NavBarBS />
      <ItemListContainer />

    </div>
    
  );
}

export default App;
