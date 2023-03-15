import './App.css';
import NavBar from './components/NavBar';

import Productos from './components/ItemList';
import Item from './components/Item'




function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Productos/>
      <Item/>
      
      
    </div>
  );
}

export default App;
