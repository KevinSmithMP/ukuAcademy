import { useEffect, useState } from 'react';
import "./ListaForm.css" 
interface Formemployee{
  nombre: string;
  apellido: string;
  rut: string;
}

function Listaformulario() {
  const [employees, setEmployees] = useState<Formemployee[]>([]);
  
  

  useEffect(() => {
    const fetchFormulario = async () => {
      try {
        const response = await fetch("http://localhost:4000/Listaformulario"); // URL del endpoint
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
   
  }, []);

  return (

    <div>
      {
       
        employees.length > 0 && (
          employees.map((item, index)=> (
             

              <div className='borde' key={index}>
                <h2>apellido:{item.apellido}</h2>
                <h2>rut:{item.rut}</h2>

              </div>



        
          ))
        )
      }
    </div>
  );
}

export default Listaformulario;
