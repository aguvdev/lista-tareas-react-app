import '../stylesheets/TareaFormulario.css';

function TareaFormulario(props) {
  return (
    <form className='tareaFormulario-container'>
      <input 
          className='tarea-input'
          type='text'
          placeholder='Escribe una Tarea'
          name='texto'
      />
      <button className='tarea-button'>
        Agregar Tarea
      </button>
    </form>
  );
};

export default TareaFormulario;