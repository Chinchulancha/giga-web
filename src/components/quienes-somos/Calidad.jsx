import Medal from "../../assets/medal.png";

const Calidad = () => {
  return (
    <div className="quienes_somos_grid text-center grid bg-slate-800 p-10 rounded w-full">
        <div className="md:col-span-full pb-0 md:pb-20 border-b-2 mb-5 md:mb-12">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="text-2xl md:text-4xl"
          >
            Más de{" "}
            <span
              data-aos="fade-up"
              className="text-4xl md:text-6xl uppercase tracking-wider text-orange-500"
            >
              15 años
            </span>{" "}
            logrando{" "}
            
            <span
              data-aos="fade-up"
              className="uppercase text-6xl tracking-wider text-orange-500 w-full"
            >
              Calidad
            </span>
          </h2>
        </div>
        <div data-aos="zoom-in" className="w-full h-full justify-center border-r-2 hidden md:flex">
          <img className="w-72" src={Medal} alt="Medalla Experiencia GIGA" />
        </div>
        <div data-aos="fade-up" className="font-mono text-base py-3 px-5 flex justify-between flex-col gap-y-10">
          <h3 className="text-4xl uppercase tracking-wider text-orange-500">
            Desde 2008 haciendo lo que amamos.  
          </h3>
          <p>Con 15 años de experiencia, nuestra empresa constructora es una garantía de calidad, profesionalismo y satisfacción para todos aquellos que buscan soluciones constructivas de alto nivel.</p>

          <p>Nuestro compromiso se refleja en cada proyecto que emprendemos, además, nos aseguramos de utilizar materiales de la más alta calidad y tecnologías avanzadas para garantizar la durabilidad y eficiencia de nuestras obras.</p>
        </div>
      </div>
  )
}

export default Calidad