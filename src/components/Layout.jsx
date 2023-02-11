import React from 'react'
import Header from './Header'
import Aos from 'aos'
import { FiPhoneCall } from "react-icons/fi";
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <div data-aos="fade-down" className="lg:container lg:mx-auto text-white sm:w-full sm:h-full">
        <Header
        Aos = {Aos}
        FiPhoneCall = {FiPhoneCall}
        />
    </div>

    <Outlet/>

    </>
  )
}

export default Layout