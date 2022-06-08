import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
      <div 
          className='tarea-text'
          onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
          className='tarea-icons-container'
          onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icon' />
      </div>
    </div>
  );
};

export default Tarea;