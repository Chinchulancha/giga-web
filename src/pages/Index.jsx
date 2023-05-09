import { useEffect } from "react";
import Builder from "../assets/builder.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import Aos from "aos";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";


const Index = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="pt-10 md:py-20 grid grid-rows-2 gap-10 md:grid-rows-none md:grid-cols-2 text-white">
      <div className="grid place-items-center pl-10 pr-10 md:pr-0 text-center">
        <h2 className="text-4xl md:text-6xl">
          La <span className="text-yel text-6xl md:text-7xl uppercase">Obra</span>
          <br /> de tus Sueños se puede hacer Realidad
        </h2>

        <Link to="/proyectos" data-aos={isMobile ? null : "flip-down"}  data-aos-offset="0" className="p-3 md:p-5 bg-white rounded text-2xl lg: shadow-lg flex gap-x-4 hover:scale-110 transition text-[#0a0a0a]">
          <span>Ver Proyectos</span> <BsFillCaretDownFill className="text-4xl"></BsFillCaretDownFill>
        </Link>
      </div>
      <div data-aos="fade-left" className="md:pt-10 md:pl-36 mt-4 md:mt-0">
        <img src={Builder} alt="" />
      </div>
    </div>
  );
};

export default Index;
