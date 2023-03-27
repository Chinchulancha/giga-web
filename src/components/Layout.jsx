import React from 'react'
import Header from './Header'
import { FiPhoneCall } from "react-icons/fi";

const Layout = () => {
  return (
    <>
    
    <div data-aos="fade-down" className="lg:container lg:mx-auto text-white sm:w-full sm:h-full">
        <Header
        FiPhoneCall = {FiPhoneCall}
        />
    </div>


    </>
  )
}

export default Layout