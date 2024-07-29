'use client'
import Layout from '../layout'

import { useState, useEffect } from 'react';
import Formulario from '../components/Formulario';
import Listado from '../components/Listado';

export default function Reservas() {
 
  const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
  const [citas, setCitas] = useState(citasGuardadas || []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <Layout>
    <div className="container">
      <div className="contenido">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
    </Layout>
  );
}
