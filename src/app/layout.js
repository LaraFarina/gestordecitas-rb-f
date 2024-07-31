

import '../app/styles/App.css'
import Navbar from '../app/components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
