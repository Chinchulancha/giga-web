import { useEffect, useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div data-aos="fade-down" className="lg:container lg:mx-auto text-white sm:w-full sm:h-full">
      <Header
        Aos = {Aos}
      />
      <Main
        Aos={Aos}
      />
    </div>
  )
}

export default App
