import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Portafolio from "./Pages/Portafolio/Portafolio";
import Contact from "./Pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadFull(engine);
      });
      setInit(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    loadParticles();

    return () => {};
  }, []);

  const location = useLocation();

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
