import React from 'react'
import Header from './Header'
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  return (
    <>
    
    <div data-aos="fade-down" className="lg:container lg:mx-auto text-white sm:w-full sm:h-full">
        <Header
        FiPhoneCall = {FiPhoneCall}
        />
    </div>

    <a href="https://api.whatsapp.com/send?phone=5493416924953&text=Hola, vengo de la web." target="_blank" className='fixed bottom-5 right-5 text-white bg-[#25D366] shadow-lg rounded-full p-2 hover:scale-110 transition z-50'>
      <FaWhatsapp className='text-[40px] md:text-[50px]'/>
    </a>
    </>
  )
}

export default Layout