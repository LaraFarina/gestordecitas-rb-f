import Link from 'next/link';
import Foto from './styles/Foto.jpg'
import Layout from './layout'
import './styleP.css'
export default function Home() {
  return (
<Layout>
    <div className="container">
         <header className="header">
        <h1 className="adm">ADMINISTRADOR DE PACIENTES</h1>
      </header>
      <main className="main-content">
        <section className="welcome">
          <div className="welcome-text">
            <h2>Bienvenidos</h2>
            <p>Bienvenido a nuestra aplicación de administración de pacientes. Aquí podrás gestionar tus citas, llevar un registro detallado de tus pacientes y recibir ayuda en cualquier momento.</p>
          </div>
        </section>
        <section className="features">
          <h2>Características</h2>
          <ul>
            <li>Gestión de citas</li>
            <li>Historial de pacientes</li>
            <li>Soporte en línea</li>
            <li>Y mucho más...</li>
          </ul>
          
        </section>
        <div class="container"></div>
      </main>
    </div>
    </Layout>
  );
}
