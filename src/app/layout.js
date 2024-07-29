

import '../app/styles/App.css'
import navbar from '../app/components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <navbar/>
        {children}
      </body>
    </html>
  );
}
