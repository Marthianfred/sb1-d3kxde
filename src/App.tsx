import React, { useState } from 'react'
import { Menu, X, Home, Settings, User } from 'lucide-react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header principal */}
      <header className="bg-blue-600 text-white h-[60px] flex items-center justify-between px-4 z-50 md:fixed md:top-0 md:left-0 md:right-0">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold ml-4">Mi Aplicación</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200">Inicio</a>
          <a href="#" className="hover:text-blue-200">Acerca de</a>
          <a href="#" className="hover:text-blue-200">Contacto</a>
        </nav>
      </header>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-grow md:mt-[60px]">
        {/* Sidebar (3 columnas en desktop) */}
        <aside className={`bg-gray-800 text-white w-full md:w-3/12 transition-all duration-300 ease-in-out ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
          <nav className="flex flex-col py-4">
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <Home size={24} />
              <span className="ml-2">Inicio</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <User size={24} />
              <span className="ml-2">Perfil</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <Settings size={24} />
              <span className="ml-2">Configuración</span>
            </a>
          </nav>
        </aside>

        {/* Contenido principal (9 columnas en desktop) */}
        <main className="flex-grow w-full md:w-9/12 p-4 overflow-auto">
          {/* Header de contenido (fijo en desktop) */}
          <div className="bg-white shadow-md p-4 mb-4 md:sticky md:top-[60px]">
            <h2 className="text-xl font-bold">Header de Contenido</h2>
          </div>

          {/* Contenido con scroll */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Bienvenido a la Plantilla Base</h2>
            <p>Esta es una plantilla base responsiva creada con React, TypeScript y Tailwind CSS. Incluye un header principal fijo en desktop, un sidebar responsive y un área de contenido principal.</p>
            <p>Características principales:</p>
            <ul className="list-disc list-inside">
              <li>Diseño basado en 12 columnas</li>
              <li>Header principal fijo de 60px de altura (solo en desktop)</li>
              <li>Sidebar que ocupa 3 columnas en desktop</li>
              <li>Área de contenido principal que ocupa 9 columnas en desktop</li>
              <li>Header de contenido fijo dentro del área principal</li>
              <li>Diseño totalmente responsive</li>
            </ul>
            <p>Puedes comenzar a personalizar esta plantilla según tus necesidades específicas.</p>
            
            {/* Contenido adicional para demostrar el scroll */}
            {[...Array(10)].map((_, index) => (
              <p key={index} className="mb-4">
                Este es un párrafo de ejemplo para demostrar el comportamiento de scroll. 
                El contenido puede desplazarse mientras el header de contenido permanece visible.
              </p>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 h-[40px] flex items-center justify-center">
        <p className="text-sm text-gray-600">&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App