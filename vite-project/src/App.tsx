import React, { useState } from 'react';
import './App.css';
import { Button} from '@mui/material';
import HeaderComponent from './components/HeaderComponen';
import Listaformulario from './pages/GetFormulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputField from './components/inputField';

    const Formulario: React.FC = () =>{
       const [] = useState('')
      
 
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');

 
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:4000/',{
        method: 'post',
        body: JSON.stringify({nombre, apellido, rut, correo, comentario}),
        headers:{
          'Content-Type': 'application/json'
        },
    });
      const result = await response.json();
      console.log({nombre, apellido, rut, correo, comentario})
      console.log(result);
      }catch(error){
      console.log(error);
      }

      console.log({
        nombre,
        apellido,
        rut,
        correo,
        comentario,
      });
      alert('Formulario enviado con éxito');
     
};
    
  return (
  <>
   <HeaderComponent/>
  
    <div className="App">
      <h1>Formulario de Datos Personales</h1>
      <form onSubmit={handleSubmit}>
       
      
       <InputField
            label="Nombre"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
       />
       <InputField
            label="Apellido"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
       />
       <InputField
            label="Rut"
            type="text"
            id="rut"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
       />
       <InputField
            label="Correo electrónico"
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
       />
       <InputField
            label="Comentario o Mensaje"
            type="text"
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
       />
          <Button onClick={handleSubmit} type="submit"> Guardar</Button>
      </form>
    </div>

  </>
  
  );



}

function App() {
  return (
    <BrowserRouter>   
      <Routes>      
        <Route path="/" element={<Formulario />}/>       
        <Route path="/Listaformulario" element={<Listaformulario/>} />                   
      </Routes>       
    </BrowserRouter>
  );
}
   
export default App;

