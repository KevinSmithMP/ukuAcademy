import { useEffect, useState } from 'react';
import "./ListaForm.css" 

function Listaformulario() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchListaFormulario() {
      const response = await fetch('/employees');
      const fetchedEmployees = await response.json();
      setEmployees(fetchedEmployees);
    }
    console.log(employees);

    fetchListaFormulario();
  }, []);

  return (

    <div>
      {
       
        employees.length > 0 && (
          employees.map((item, index)=> (
             

              <div className='borde'>
                <h2>nombres:{item}</h2>

              </div>



        
          ))
        )
      }
    </div>
  );
}

export default Listaformulario;
