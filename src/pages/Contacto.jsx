

import Form from "../components/Form";
import InfoContacto from "../components/InfoContacto.jsx";
import InfoIG from "../components/InfoIG";

const Contacto = () => {
  return (
    <div className="contactoDiv grid gap-10 mt-20 md:mt-26 text-white w-full place-items-center">
        <InfoContacto/>
      <div data-aos="zoom-out" data-aos-duration="1200" className=" grid grid-cols-1 grid-rows-none place-items-center bg-slate-800 rounded-lg mr-0 border-t-4 border-b-4 w-full">
        <Form/>
      </div>
        <InfoIG/>
    </div>
  );
};

export default Contacto;
