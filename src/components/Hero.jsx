// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importamos Link desde react-scroll

function Hero() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-orange-500 h-screen flex items-center px-10 md:px-20 lg:px-32 py-10">
      {/* Contenedor del texto */}
      <div className="flex flex-1 flex-col justify-center space-y-8 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl lg:text-7xl font-bold text-orange-400 drop-shadow-lg">
            Descubre el Poder de la Conexión
          </h1>
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-200 mt-4">
            TV + INTERNET DE FIBRA ÓPTICA
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl lg:text-3xl text-gray-300"
        >
          Una experiencia de conexión que transforma tu mundo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Usamos Link de react-scroll para hacer scroll al componente AboutUs */}
          <Link
            to="about-us" // El id del contenedor de AboutUs
            smooth={true} // Activamos el desplazamiento suave
            duration={500} // Duración del desplazamiento en milisegundos
            offset={-80} // Ajustamos el desplazamiento para que no quede detrás del navbar, si tienes uno fijo
            className="px-8 py-4 bg-orange-600 text-white text-2xl lg:text-3xl font-bold rounded-full hover:bg-orange-700 transition-colors mt-16"
          >
            Empieza Ahora
          </Link>
        </motion.div>
      </div>

      {/* Imagen decorativa, oculta en dispositivos móviles */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:flex flex-1 justify-center mt-10"
      >
        <img
          src="/img/herologo.png"
          alt="Decorative Logo"
          className="rounded-md max-w-2xl lg:max-w-2xl transform hover:scale-110 transition-transform duration-300"
        />
      </motion.div>
    </header>
  );
}

export default Hero;
