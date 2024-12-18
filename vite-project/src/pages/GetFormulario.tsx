import { useEffect, useState } from 'react';
import "./ListaForm.css" 
import HeaderComponent from '../components/HeaderComponen';
import { Button } from '@mui/material';
interface Formemployee{
 
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  comentario: string;
  id: string;
}

function Listaformulario() {
  const [employees, setEmployees] = useState<Formemployee[]>([]);
 

  useEffect(() => {
    const fetchFormulario = async () => {
      try {
        const response = await fetch("http://localhost:4000/Listaformulario"); 
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        setEmployees(result);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchFormulario();
    },
  []);

  function handleDelete(_id: any): void {
    throw new Error('Function not implemented.');
  }
 
  function handleEdit(_id: string): void {
    throw new Error('Function not implemented.');
  }
        return (
    <>
    <div>
    <HeaderComponent></HeaderComponent>
   </div>

   <div> {
              employees.length > 0 && (
              employees.map((item, index)=> (
             
            <div key={index} className="item">
             <p><strong></strong>{item.id}</p>
              <h2>Nombre: {item.nombre}</h2>
              <h2>Apellido: {item.apellido}</h2>
              <h2>Rut: {item.rut}</h2>
              <h2>Correo: {item.correo}</h2>
              <h2>Comentario: {item.comentario}</h2>
                
        <div className='center'>
     <div className='boton1'>
     <Button variant='contained' color='error' onClick={() => handleDelete(item.id)}>Eliminar</Button>
    </div>

     <div className='boton2'>
    <Button variant='contained' color='success' onClick={() => handleEdit(item.id)}>Editar</Button>
    </div>
    </div>

           </div>  
     ))
  )
         }
   </div>
    
    </> 
  );
}

export default Listaformulario;
