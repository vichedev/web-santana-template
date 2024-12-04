import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Documentos from "./components/Documentos";
import Contactos from "./components/Contactos";
import documentosData from "./data/documents";

// Componente para hacer scroll al inicio en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al inicio cada vez que cambia la ruta
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Agrega el componente aquí */}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <AboutUs />
              <Services />
              <Footer />
            </div>
          }
        />
        <Route
          path="/documents"
          element={
            <div className="min-h-screen bg-gray-100 flex flex-col">
              <Documentos documentos={documentosData} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
              <Contactos />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
