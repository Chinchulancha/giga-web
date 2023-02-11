import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const InfoContacto = () => {
  return (
    <div className="grid grid-cols-1 md:grid-rows-2 grid-rows-none place-items-center bg-slate-800 rounded-lg ml-0 md:ml-0 border-t-4 border-b-4 w-full h-full">
      <div className="p-10 w-full text-center flex justify-center flex-col gap-y-10 rounded-lg">
        <div className="grid place-items-center">
          <BsTelephoneFill className="text-3xl" />
        </div>
        <div>
          <h3 className="text-4xl font-bold">Teléfono</h3>
        </div>
        <div>
          <p className="text-xl font-mono text-gray-300">
            Nuestro teléfono de contacto, para cualquier consulta.
          </p>
        </div>
        <div>
          <p className="text-2xl  text-orange-500">+54 9 341-692-4953</p>
        </div>
      </div>
      <div className="p-10 w-full text-center flex justify-center flex-col gap-y-10 rounded-lg">
        <div className="grid place-items-center">
          <AiOutlineMail className="text-3xl" />
        </div>
        <div>
          <h3 className="text-4xl font-bold">E-mail</h3>
        </div>
        <div>
          <p className="text-xl font-mono text-gray-300">
            Dejamos nuestro E-mail a su disposición.
          </p>
        </div>
        <div>
          <p className=" text-2xl text-orange-500">giga.ingenieria@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default InfoContacto;
