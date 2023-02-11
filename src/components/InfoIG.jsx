import { useEffect } from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";



const InfoIG = () => {

  return (
    <div className="grid place-items-center bg-slate-800 rounded-lg mr-0 md:mr-0 border-t-4 border-b-4 w-full h-full">
      <div className="p-10 w-full text-center flex justify-center flex-col gap-y-10 rounded-lg">
        <div className="grid place-items-center">
          <AiOutlineInstagram className="text-5xl" />
        </div>
        <div>
          <h3 className="text-4xl font-bold">Instagram</h3>
        </div>
        <div>
          <p className="text-xl font-mono text-gray-300">
            Nuestro Instagram, para ver proyectos y enterarte de todo.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-white grid place-items-center gap-2"><span>Click Ahí</span> <AiOutlineArrowDown className="text-3xl" /></p>
        </div>
        <div className="tracking-wide duration-700 transition hover:scale-110">
          <a href="https://www.instagram.com/giga_constructora/" target="_blank" className="text-3xl text-orange-500">@giga_constructora</a>
        </div>
      </div>
    </div>
  );
};

export default InfoIG;
