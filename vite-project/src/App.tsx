import React, { useState } from 'react';
import './App.css';
import { Button} from '@mui/material';

    const Formulario: React.FC = () =>{
      const [] = useState('')
 
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Rut:', rut);
    console.log('Correo electrónico:', correo);
    console.log('Comentario:', comentario);
  };

  return (
    <div className="App">
      <h1>Formulario de Datos Personales</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="rut">Rut:</label>
          <input
            type="text"
            id="rut"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="comentario">Comentario o mensaje:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows={6}
            required
          />
        </div>

        <Button type="submit">Guardar</Button>
      </form>
    </div>
  );
}

const App: React.FC =() => {
  return (
    <div className="App">
      <h1>Formulario Personal</h1>
      <Formulario />
    </div>
  );
}

export default App;
