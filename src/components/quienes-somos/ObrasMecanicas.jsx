const ObrasMecanicas = () => {
  return (
    <div className="civiles_mecanicas_grid text-center grid bg-slate-800 p-4 md:p-10 rounded">
    <div className="md:col-span-full pb-5 md:pb-20 border-b-2">
      <h2
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-2xl md:text-4xl"
      >
        <span
          data-aos="fade-up"
          className="uppercase text-4xl md:text-6xl tracking-wider text-orange-500 w-full mb-10 "
        >
          Obras Mecánicas
        </span>
      </h2>
    </div>
    
    <div
      data-aos="fade-up"
      className="mt-10 font-sans text-base md:py-3 md:px-5 flex justify-center flex-col gap-y-5 md:gap-y-8"
    >
      
      
        <p className='md:text-2xl'>- Montaje.  </p>
        <p className='md:text-2xl'>- Prefabricados. </p>
        <p className='md:text-2xl'>- Recipientes a Presión.    </p>
        <p className='md:text-2xl'>- Piping.     </p>
        <p className='md:text-2xl'>- Inspecciones de producción.     </p>
        <p className='md:text-2xl'>- Inspección de la soldadura.    </p>
        <p className='md:text-2xl'>- Gestión y Control de la Calidad.     </p>
      
    </div>
  </div>
  )
}

export default ObrasMecanicas