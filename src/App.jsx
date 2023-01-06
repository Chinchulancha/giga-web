import { useEffect, useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Aos from "aos";
import { FiPhoneCall } from "react-icons/fi";

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div data-aos="fade-down" className="lg:container lg:mx-auto text-white sm:w-full sm:h-full">
      <Header
        Aos = {Aos}
        FiPhoneCall = {FiPhoneCall}
      />
      <Main
        Aos={Aos}
        FiPhoneCall = {FiPhoneCall}
      />
    </div>
  )
}

export default App
