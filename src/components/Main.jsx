import { useEffect } from "react";
import Builder from "../assets/builder.png";
import Typed from "typed.js";


const Main = ({Aos}) => {
  useEffect(() => {
    var typed = new Typed(".auto-type", {
      strings: ["CASA", "PILETA", "CASA"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: false,
      showCursor: false,
    });
  }, []);

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="pt-10 md:py-20 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 transition-all">
      <div className="grid place-items-center pl-10 pr-10 md:pr-0 text-center">
        <h2 className="text-4xl md:text-6xl">
          La <span className="auto-type text-orange-500 text-6xl md:text-7xl"></span>
          <br /> de tus Sueños se puede hacer Realidad
        </h2>
      </div>
      <div data-aos="fade-left" className="md:pt-10 md:pl-36 mt-7 md:mt-0">
        <img src={Builder} alt="" />
      </div>
    </div>
  );
};

export default Main;
