import React from "react";

interface DatoProps {
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;

  apellido: string;
  setApellido: React.Dispatch<React.SetStateAction<string>>;

  rut: string;
  setRut: React.Dispatch<React.SetStateAction<string>>;

  correo: string;
  setCorreo: React.Dispatch<React.SetStateAction<string>>;

  comentario: string;
  setComentario: React.Dispatch<React.SetStateAction<string>>;
}

function Dato({
  nombre, setNombre,
  apellido, setApellido,
  rut, setRut,
  correo, setCorreo,
  comentario, setComentario,
}: DatoProps) {
  return (
    <div>
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
        <label htmlFor="comentario">Comentario o Mensaje:</label>
        <input
          type="text" 
          id="comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Dato;