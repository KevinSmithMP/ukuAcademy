import React, { useState } from 'react';
import './App.css';
import { Button} from '@mui/material';
import HeaderComponent from './components/HeaderComponen';
import Listaformulario from './pages/GetFormulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Dato from "./components/Dato";
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
   <HeaderComponent 
   />
    <div className="App">
      <h1>Formulario de Datos Personales</h1>
      <form onSubmit={handleSubmit}>
       
       <Dato nombre={''} setNombre={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          } } apellido={''} setApellido={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          } } rut={''} setRut={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          } } correo={''} setCorreo={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          } } comentario={''} setComentario={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          } }       


       />

       
        <Button onClick={handleSubmit} type="submit">Guardar</Button>
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

