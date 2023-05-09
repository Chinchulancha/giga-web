import UbicacionIMG from "../../assets/ubicacion.png";

const Ubicacion = () => {
  return (
    <div className="quienes_somos_grid text-center grid bg-slate-800 p-10 rounded">
      <div className="md:col-span-full pb-0 md:pb-20 border-b-2 mb-12">
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl"
        >
          <span
            data-aos="fade-up"
            className="uppercase text-4xl md:text-6xl tracking-wider text-orange-500 w-full"
          >
            Ubicación
          </span>
        </h2>
      </div>
      <div
        data-aos="zoom-in"
        className="w-full h-full justify-center border-r-2 hidden md:flex"
      >
        <img className="w-72" src={UbicacionIMG} alt="a" />
      </div>
      <div
        data-aos="fade-up"
        className="font-sans text-base md:py-3 md:px-5 flex justify-center flex-col gap-y-20"
      >
        <h3 className="text-4xl uppercase tracking-wider text-orange-500">
          Rosario y alrededores.
        </h3>
        <p className="text-xl">
          GIGA es un activo partícipe en la construcción que se viene demandado
          en los últimos años. Hemos plantado nuestras fundaciones en barrios de
          Rosario y alrededores, y es nuestro objetivo ampliar nuestros
          servicios dentro de las industrias.
        </p>
      </div>
    </div>
  );
};

export default Ubicacion;
