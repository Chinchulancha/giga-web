import { useState } from 'react';

import Casas from './Casas';
import Otros from './Otros';

const Select = () => {
    const [seleccion, setSeleccion] = useState('casas');  

    const handleChange = (e) => {
        setSeleccion(e.target.value);
      };

  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='w-2/3 md:w-3/5 text-center'>
        <select data-aos="flip-up" data-aos-duration="1200" value={seleccion} onChange={handleChange} className="rounded-lg cursor-pointer bg-orange-500 uppercase w-full text-xl md:text-2xl font-mono  py-6 mb-10">
        <option value="otros" className='text-center'>Otros</option>
        <option value="casas" className='text-center'>Casas</option>
      </select>
      </div>

       <div>
      {seleccion === 'casas' && <Casas />}
      {seleccion === 'otros' && <Otros />}
      </div> 
    </div>
  )
}

export default Select