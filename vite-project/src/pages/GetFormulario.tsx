import { useEffect, useState } from 'react';
import "./ListaForm.css";
import HeaderComponent from '../components/HeaderComponen';
import { Button } from '@mui/material';

interface FormEmployee {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  comentario: string;
  id: string;
}

function ListaFormulario() {
  const [empleados, setEmpleados] = useState<FormEmployee[]>([]);
  const [editandoId, setEditandoId] = useState<string | null>(null); // Estado para manejar la edición de un solo formulario
  const [formData, setFormData] = useState<FormEmployee | null>(null); // Estado para los datos del formulario en edición

  useEffect(() => {
    const fetchFormulario = async () => {
      try {
        const response = await fetch("http://localhost:4000/Listaformulario");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const resultado = await response.json();
        console.log(resultado);
        setEmpleados(resultado);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchFormulario();
  }, []);

  const handleDelete = async (id: any) =>{
    try{
    const response = await fetch(`http://localhost:4000/Listaformulario/${id}`,{
      method: 'delete',

    });
    const result = await response.json();

  }catch(error){
    console.log(error);
  }
  }

  // Maneja la edición de un formulario
  function handleEdit(id: string) {
    setEditandoId(id);
    const empleado = empleados.find((item) => item.id === id);
    if (empleado) {
      setFormData(empleado); // Establece los datos para editar
    }
  }

  // Maneja los cambios en el formulario de edición
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => (prev ? { ...prev, [name]: value } : prev));
  }

  // Maneja el envío del formulario editado
  async function handleSubmit() {
    if (!formData) return;
    
    try {
      const response = await fetch(`http://localhost:4000/Listaformulario/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Formulario actualizado correctamente');
        setEmpleados((prev) => prev.map((item) => item.id === formData.id ? formData : item));
        setEditandoId(null); // Deja de editar el formulario
      } else {
        alert('Error al actualizar el formulario');
      }
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('Hubo un error al conectar con el servidor');
    }
  }

  

  return (
    <>
      <div><HeaderComponent /></div>
      <div>
        {empleados.length > 0 && (
          empleados.map((item, index) => (
            <div key={index} className="item">
              <p><strong>ID:</strong> {item.id}</p>
              <h2>Nombre: {item.nombre}</h2>
              <h2>Apellido: {item.apellido}</h2>
              <h2>Rut: {item.rut}</h2>
              <h2>Correo: {item.correo}</h2>
              <h2>Comentario: {item.comentario}</h2>

              <div className="centro">
                <div className="boton1">
                  <Button variant="contained" color="error" onClick={() => {handleDelete(item.id); window.location.reload();}}>
                  </Button>
                </div>
                <div className="boton2">
                  <Button variant="contained" color="success" onClick={() => handleEdit(item.id)}>
                    Editar
                  </Button>
                </div>
              </div>

    {editandoId === item.id && formData && (
        <div className="editarFormulario">
            <h3>Editar Formulario</h3>
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            placeholder="Nombre"
          />
          <input 
            type="text" 
            name="apellido" 
            value={formData.apellido} 
            onChange={handleChange} 
            placeholder="Apellido"
          />
          <input 
            type="text" 
            name="rutina" 
            value={formData.rut}
            onChange={handleChange} 
            placeholder="Rutina"
          />
          <input 
            type="email" 
            name="correo" 
            value={formData.correo} 
            onChange={handleChange} 
            placeholder="Correo"
          />
          <input 
            type="text" 
            name="comentario" 
            value={formData.comentario} 
            onChange={handleChange} 
            placeholder="Comentario"
          />
            <Button variant="contained" onClick={() => handleEdit(item.id)}>
                    Guardar
            </Button>
        </div>
  )}
              </div>
          ))
        )}
      </div>
    </>
  );
}

export default ListaFormulario;