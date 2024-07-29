import React, { useState } from 'react';
import FormularioComponente from './Formulariocomp';

export default function Formulario({ agregarCita }) {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueño, setNombreDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreMascota.trim() === '' || nombreDueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError('Todos los campos son obligatorios');
      return;
    }
    const fechaSeleccionada = new Date(`${fecha}T${hora}`);
    const fechaActual = new Date();
    if (fechaSeleccionada < fechaActual) {
      setError('La fecha seleccionada no puede ser anterior a la fecha actual');
      return;
    }
    const confirmar = window.confirm('¿Estás seguro de agregar esta cita?');
    if (confirmar) {
      const id = Math.floor(Math.random() * 10000);
      agregarCita({ id, nombreMascota, nombreDueño, fecha, hora, sintomas });
      setNombreMascota('');
      setNombreDueño('');
      setFecha('');
      setHora('');
      setSintomas('');
      setError('');
    }
  };

  return (
    <FormularioComponente
      nombreMascota={nombreMascota}
      nombreDueño={nombreDueño}
      fecha={fecha}
      hora={hora}
      sintomas={sintomas}
      error={error}
      setNombreMascota={setNombreMascota}
      setNombreDueño={setNombreDueño}
      setFecha={setFecha}
      setHora={setHora}
      setSintomas={setSintomas}
      handleSubmit={handleSubmit}
    />
  );
}
