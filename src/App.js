import './App.css';
import Logo from './components/Logo';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas-container'>
      <Logo 
          titulo='Lista de Tareas' 
      />
      <div className='lista-tareas-principal'>
        <h2>Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
