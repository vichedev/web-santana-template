// src/components/Contactos.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contactos() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-red-500 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-6">
          ¡Contáctanos!
        </h2>
        <p className="text-lg text-white mb-12 px-4 md:px-0">
          Queremos saber de ti. Por favor, revisa nuestra información de
          contacto o envíanos un mensaje.
        </p>

        {/* Imagen representativa */}
        <div className="max-w-4xl mx-auto mb-10">
          <img
            src="https://via.placeholder.com/800x400" // Cambia esta URL por la imagen que desees usar
            alt="Imagen de contacto"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Bento Grid con animaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Animación 1 */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Teléfono</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </motion.div>

          {/* Animación 2 */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Correo Electrónico
            </h3>
            <p className="text-gray-600">info@example.com</p>
          </motion.div>

          {/* Animación 3 */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Dirección</h3>
            <p className="text-gray-600">123 Calle Ejemplo, Ciudad, País</p>
          </motion.div>
        </div>

        {/* Sección de Mensaje */}
        {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Envíanos un Mensaje
          </h3>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Enviar
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Contactos;
