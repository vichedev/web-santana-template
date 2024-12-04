import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importar Link

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 rounded-md shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo como enlace para redirigir al inicio */}
        <Link to="/">
          <img src="/img/icon_nav.png" alt="TV SANTANA" className="h-8" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/documents"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Documentos
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <Link
            to="/documents"
            className="block text-2xl text-gray-800 hover:text-blue-600 font-medium mb-4"
          >
            Documentos
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
