import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className='aplicacion-tareas-container'>
      <Logo 
          titulo={'Lista de Tareas'} />
      <div className='lista-tareas-principal'>
        <h2>Mis Tareas</h2>
      </div>
    </div>
  );
}

export default App;
