import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
  return (
    <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
      <div className='tarea-text'>
        {texto}
      </div>
      <div className='tarea-icons-container'>
        <AiOutlineCloseCircle className='tarea-icon' />
      </div>
    </div>
  );
};

export default Tarea;