import React from 'react';
import Link from 'next/link';
import '../styles/navbar.css';
export default function Navbar({ citas, eliminarCita }) {
  return (
 <nav>
        <ul>
          <li><Link href="/quienes-somos">Quienes Somos</Link></li>
          <li><Link href="/reservas">Reservas</Link></li>
          <li><Link href="/contacto">Ayuda</Link></li>
        </ul>
      </nav> 
      );
}