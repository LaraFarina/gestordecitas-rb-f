'use client';
import { useState, useEffect } from 'react';
import Layout from '../layout'
import '../contacto/style.css'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado');
  };

  return (
    <Layout>
    <div className="container">
      <h1>Necesito ayuda</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Mensaje"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </Layout>
  );
}
