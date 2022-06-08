import '../stylesheets/ListaDeTareas.css';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea'
import React, { useState } from 'react';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    /* el metodo trim() remueve los espacios del principio y del final. Entonces si no hay espacios se reconoce como un string vacio, por ende da false */
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      /* [tarea, ...tareas] de esta forma la ultima tarea que se escriba va a estar primera, y con el spread operator va a individializar las demas tareas que ya estaban y la va a poner en la lista */
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completaTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>{/* esta forma sin div se llama fragmento */}
      <TareaFormulario
          onSubmit={agregarTarea} />
      <div className='tarea-lista-container'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}/* key es importante para que no cambie de posicion al actualizar la pagina */
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completaTarea} />
          )
        }
      </div>
    </>
  );
};

export default ListaDeTareas;