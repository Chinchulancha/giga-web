const ObrasCiviles = () => {
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
          Obras Civiles
        </span>
      </h2>
    </div>
    
    <div
      data-aos="fade-up"
      className="mt-10 font-mono text-base md:py-3 md:px-5 flex justify-center flex-col gap-y-10"
    >
      
      
        <p className='md:text-2xl'>- Proyectos de ingeniería y arquitectura. </p>
        <p className='md:text-2xl'>- Ejecución completa de obras para viviendas e industrias.</p>
        <p className='md:text-2xl'>- Dirección y Supervisión de obras. </p>
      
    </div>
  </div>
  )
}

export default ObrasCiviles