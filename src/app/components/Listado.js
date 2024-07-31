import React from 'react';

export default function Listado({ citas, eliminarCita }) {
  return (
    <div className="listado">
      <h2>Listado de Citas</h2>
      <ul>
        {citas.map(cita => (
          
          <li key={cita.id}>
            <p><strong>Nombre Mascota:</strong> {cita.nombreMascota}</p>
            <p><strong>Nombre Dueño:</strong> {cita.nombreDueño}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <p><strong>Síntomas:</strong> {cita.sintomas}</p>
            <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
