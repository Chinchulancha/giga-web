import { useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aos from "aos";
import Layout from './components/Layout';
import Index from './pages/Index'
import Proyectos from './pages/Proyectos';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <BrowserRouter>
    <Layout/>

    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="/proyectos" element={<Proyectos/>} />
      <Route path="/quienes-somos" element={<QuienesSomos/>} />
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
