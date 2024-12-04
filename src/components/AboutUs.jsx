import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUs() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto text-center px-4 w-full">
        {/* Introducción */}
        <div className="mb-12"  id="about-us">
          <img
            src="/img/Titulos/sobrenosotros.png"
            alt="Sobre Nosotros"
            className="max-w-full mx-auto h-auto"
          />
        </div>

        <p className="text-lg text-gray-600 mb-12">
          En <span className="font-bold text-indigo-600">TV Santa Ana</span>,
          nuestra misión es revolucionar la forma en que las personas se
          conectan a Internet. Con un equipo de expertos apasionados por la
          tecnología, nos dedicamos a ofrecer soluciones de conectividad que
          impulsan el crecimiento de nuestros clientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Animación 1: Slide-in desde la izquierda */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
          >
            {/* Imagen adaptada */}
            <img
              src="/public/img/About/3.png"
              alt="Nuestra Misión"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-lg text-gray-700 mt-2">
              En <span className="font-bold text-indigo-600">TV Santa Ana</span>
              , conectamos a las personas con la mejor tecnología disponible.
              Nos esforzamos por proporcionar soluciones confiables y de alta
              calidad para nuestros clientes, promoviendo un acceso equitativo a
              la conectividad.
            </p>
          </motion.div>

          {/* Animación 2: Fade-in con zoom */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-300 via-blue-300 to-teal-300"
          >
            {/* Imagen adaptada */}
            <img
              src="/public/img/About/2.png"
              alt="Nuestro Equipo"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-lg text-gray-700 mt-2">
              Contamos con{" "}
              <span className="font-bold text-teal-600">
                profesionales dedicados
              </span>
              que ofrecen la mejor experiencia de conectividad. Cada miembro
              aporta su experiencia y compromiso, asegurando resultados
              excepcionales para nuestros clientes.
            </p>
          </motion.div>

          {/* Animación 3: Slide-in desde abajo */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300"
          >
            {/* Imagen adaptada */}
            <img
              src="/public/img/About/1.png"
              alt="Nuestros Valores"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-lg text-gray-700 mt-2">
              Nos regimos por los valores de{" "}
              <span className="font-bold text-orange-600">innovación</span>,{" "}
              <span className="font-bold text-orange-600">confianza</span> y{" "}
              <span className="font-bold text-orange-600">compromiso</span>.
              Estamos enfocados en entregar un servicio basado en estos
              principios fundamentales.
            </p>
          </motion.div>

          {/* Animación 4: Rotate-in */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, rotate: -15 }}
            animate={
              inView4 ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -15 }
            }
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden p-2"
          >
            {/* Imagen adaptada */}
            <img
              src="/public/img/About/1.jpg"
              alt="Imagen representativa"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Texto adicional: ¿Quiénes Somos? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-8 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 rounded-lg shadow-lg flex flex-col justify-center"
          >
            {/* Imagen de ¿Quiénes Somos? */}
            <img
              src="/public/img/About/4.png"
              alt="¿Quiénes Somos?"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-lg text-gray-700 mt-4">
              Somos una empresa enfocada en brindar una experiencia de
              conectividad excepcional. En{" "}
              <span className="font-bold text-indigo-600">TV Santa Ana</span>,
              nuestro objetivo es que nuestros clientes disfruten de un acceso a
              Internet seguro, confiable y de alta velocidad, apoyados en la
              innovación constante.
            </p>
          </motion.div>

          {/* Imágenes adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden p-2"
            >
              <img
                src="/public/img/About/tarjeta3.png"
                alt="Nuestro Trabajo"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden p-2"
            >
              <img
                src="/public/img/About/2.jpg"
                alt="Nuestro Compromiso"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
``;
