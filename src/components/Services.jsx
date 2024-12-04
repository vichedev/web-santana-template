import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const services = [
    {
      image:
        "https://via.placeholder.com/300/FFCCCB/000000?text=Plan+Básico+70",
      title: "Plan Básico 70 Megas",
      description:
        "Ideal para navegar, redes sociales y streaming en HD. Conexión de hasta 70 Mbps.",
      price: "$17.86/mes (+ IVA)",
      contactMessage:
        "¡Estoy interesado en el Plan Básico 70! ¿Puedes darme más detalles sobre esta opción? 🌐",
    },
    {
      image:
        "https://via.placeholder.com/300/FFDEB4/000000?text=Plan+Smart+100",
      title: "Plan Smart 100 Megas",
      description:
        "Conexión de hasta 100 Mbps. Ideal para familias y streaming 4K.",
      price: "$22.32/mes (+ IVA)",
      contactMessage:
        "¡Me gustaría más información sobre el Plan Smart 100! ¿Cómo puedo contratarlo? 📶",
    },
    {
      image:
        "https://via.placeholder.com/300/FFE6A7/000000?text=Plan+Power+150",
      title: "Plan Power 150 Megas",
      description:
        "Conexión de hasta 150 Mbps. Perfecto para trabajo remoto, juegos y streaming sin interrupciones.",
      price: "$26.79/mes (+ IVA)",
      contactMessage:
        "¡Quiero saber más sobre el Plan Power 150! ¿Cómo puedo obtenerlo? 🚀",
    },
    {
      image:
        "https://via.placeholder.com/300/FFD1FF/000000?text=Plan+Ultra+200",
      title: "Plan Ultra 200 Megas",
      description:
        "Conexión de hasta 200 Mbps. Ideal para videoconferencias y juegos en línea sin latencia.",
      price: "$31.25/mes (+ IVA)",
      contactMessage:
        "¡El Plan Ultra 200 me interesa mucho! ¿Cómo puedo contratarlo? ⚡",
    },
    {
      image:
        "https://via.placeholder.com/300/B2F2BB/000000?text=Plan+Hyper+250",
      title: "Plan Hyper 250 Megas",
      description:
        "Conexión de hasta 250 Mbps. Perfecto para hogares grandes o pequeñas oficinas.",
      price: "$35.71/mes (+ IVA)",
      contactMessage:
        "¡Estoy interesado en el Plan Hyper 250! ¿Podrías darme más información? 💻",
    },
    {
      image: "https://via.placeholder.com/300/BAE1FF/000000?text=Plan+TV+Plus",
      title: "Plan TV Plus",
      description:
        "64 canales (47 internacionales y 17 nacionales). Instalación gratuita de Internet.",
      price: "$7.87 + IVA",
      finalPrice: "$10.00 final (IVA + ICE)",
      contactMessage:
        "¡Me interesa el Plan TV Plus! ¿Cómo puedo contratarlo? 📺",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <img
            src="/img/Titulos/Nuestrosplanes.png"
            alt="Sobre Nosotros"
            className="max-w-full mx-auto h-auto"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-orange-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-md mb-4 h-32 w-full object-cover shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-xl font-bold text-gray-800 mt-4">
                  {service.price}
                </p>
                {service.finalPrice && (
                  <p className="text-xl font-bold text-gray-800 mt-2">
                    {service.finalPrice}
                  </p>
                )}

                {/* Botón de contacto con mensaje predeterminado */}
                <a
                  href={`tel:+593987409182?text=${encodeURIComponent(
                    service.contactMessage
                  )}`}
                  className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 inline-block transition duration-300"
                >
                  Contactar Ahora
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
