import React, { useState } from 'react';
import './App.css';
import { Button} from '@mui/material';
import Listaformulario from './pages/GetFormulario';

    const Formulario: React.FC = () =>{
      const [] = useState('')
 
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');

 
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault(); 
    try{
      const response = await fetch('http://localhost:4000/',{
        method: 'post',
        body: JSON.stringify({nombre, apellido, rut, correo, comentario}),
        headers:{
          'Content-Type': 'application/json'
        },
      });
      const result = await response.json();
      console.log(result);
      }catch(error){
      console.log(error);
      }

    
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

       
        <Button onClick={handleSubmit} type="submit">Guardar</Button>
      </form>
    </div>
  );
}
const App: React.FC =() => {
  return (
    <div className="App">
      <Formulario />
    </div>
  );
}
   
export default App;