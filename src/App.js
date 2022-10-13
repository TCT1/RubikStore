/* import logo from './logo.svg'; */
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Catalogo from './components/Catalogo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='Pagina'>
      <NavBar/>
      <Catalogo/>
    </div>
  );
}

export default App;
