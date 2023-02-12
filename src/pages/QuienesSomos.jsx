import { useState } from "react";

import Calidad from "../components/quienes-somos/Calidad";
import Ubicacion from "../components/quienes-somos/Ubicacion";
import ObrasCiviles from "../components/quienes-somos/ObrasCiviles";
import ObrasMecanicas from "../components/quienes-somos/ObrasMecanicas";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

const QuienesSomos = () => {
  const [nosotros, setNosotros] = useState(false);
  const [construimos, setConstruimos] = useState(false);

  const handleNosotros = () => {
    setNosotros(!nosotros);
  };

  const handleConstruimos = () => {
    setConstruimos(!construimos);
  };

  return (
    <div className="lg:container lg:mx-auto text-white sm:w-full sm:h-full px-3 md:px-20 py-10 md:py-7 flex flex-col justify-center gap-y-20 w-full items-center">
      <div className="quienes_somos_grid text-center grid bg-slate-800 p-10 rounded">
        <div className="md:col-span-full mb-12">
          <h2 className="text-2xl md:text-4xl">
            GIGA Ingeniería y Construcción SRL se formó en el año 2008 para
            satisfacer la demanda creciente de calidad en mano de obra para
            obras civiles y mecánicas.
          </h2>
        </div>
      </div>
      <div className="w-full md:w-3/4 text-center ">
        <button
          onClick={handleNosotros}
          className="hover:scale-110 transition rounded-lg bg-orange-500 uppercase w-full text-xl md:text-3xl font-mono h-full py-7 flex items-center justify-around md:justify-center md:gap-x-10 mb-10"
        >
          ¿Por Qué Nosotros?{" "}
          {nosotros ? (
            <BsFillCaretUpFill className="text-4xl md:text-5xl"></BsFillCaretUpFill>
          ) : (
            <BsFillCaretDownFill className="text-4xl md:text-5xl"></BsFillCaretDownFill>
          )}{" "}
        </button>

        <div>
          {nosotros && (
            <div className="flex flex-col gap-y-10">
              <div>
                <Calidad />
              </div>

              <div>
                <Ubicacion />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-3/4  text-center ">
        <button
          onClick={handleConstruimos}
          className="hover:scale-110 transition bg-orange-500 uppercase w-full text-xl md:text-3xl font-mono h-full py-7 flex items-center justify-around md:justify-center md:gap-x-10 rounded-lg mb-10" 
        >
          ¿Qué Construimos?{" "}
          {construimos ? (
            <BsFillCaretUpFill className="text-4xl md:text-5xl"></BsFillCaretUpFill>
          ) : (
            <BsFillCaretDownFill className="text-4xl md:text-5xl"></BsFillCaretDownFill>
          )}{" "}
        </button>

        <div>
          {construimos && (
            <div className="flex flex-col gap-y-10">
              <div>
                <ObrasCiviles />
              </div>

              <div>
              <ObrasMecanicas />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
