import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemlistContainer texto='Bienvenido'/>
      
      
    </div>
  );
}

export default App;
