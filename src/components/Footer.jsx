import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección de logo y eslogan */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/img/herologo.png" // Cambia esta ruta por la imagen que desees para "Cafanet"
                alt="Cafanet"
                className="w-40 h-auto mx-auto"
              />
            </motion.div>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Una empresa 100% Santanense
            </motion.p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-12">
            <motion.div
              className="flex flex-col items-center md:items-start space-y-3"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.h3
                className="text-xl font-semibold mb-2 text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Enlaces Rápidos
              </motion.h3>
              <motion.div
                className="flex flex-col space-y-3"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <a
                  href="https://www.speedtest.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-200 transform hover:scale-105"
                >
                  Speed Test
                </a>
                <a
                  href="https://www.presidencia.gob.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-200 transform hover:scale-105"
                >
                  Presidencia del Ecuador
                </a>
                <a
                  href="https://www.arcotel.gob.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-200 transform hover:scale-105"
                >
                  Arcotel
                </a>
                <a
                  href="https://www.telecomunicaciones.gob.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-200 transform hover:scale-105"
                >
                  Mintel
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Zona de Contacto */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.h3
              className="text-xl font-semibold mb-2 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Contacto
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p>Teléfono: 052640-837</p>
              <p>Teléfono: 0987409182</p>
            </motion.div>
          </div>

          {/* Mapa incrustado (cuadrado) */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.div
              className="w-full max-w-sm aspect-w-1 aspect-h-1"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.h3
                className="text-xl font-semibold mb-2 text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Contacto
              </motion.h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d249.3084339296104!2d-80.37195124489251!3d-1.2057082780651094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-1.2057799999999999!2d-80.37165999999999!5e0!3m2!1ses-419!2sec!4v1733342722976!5m2!1ses-419!2sec"
                width="100%"
                height="100%"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-4 text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            &copy; 2024 Inigualitysoft. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
