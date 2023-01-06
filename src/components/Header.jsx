import { useState, useEffect } from "react";

import { VscClose } from "react-icons/vsc";

import { BiMenu } from "react-icons/bi";

const Header = ({Aos, FiPhoneCall}) => {
  const [clicked, setClicked] = useState(false);

  

  const handleClick = () => {
    setClicked(!clicked);
  };



  return (
    <div data-aos="fade-zoom-in" data-aos-duration="200" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" className="flex pl-8  pt-7 md:pl-0 md:pr-0 justify-between items-center md:mb-20 w-full">
      <h1 className="text-5xl ">
        GIGA <span className="typed"></span>
      </h1>

      <button className="block ml-24 lg:hidden">
        <BiMenu className="text-5xl" onClick={handleClick}></BiMenu>
      </button>

      <nav className="shadow-lg  md:flex">
        {/* <ul className="md:flex md:gap-x-10 bg-slate-800 md:py-5 md:px-7 rounded ">
                    <li className="text-lg"><a href="#" className="tracking-wid  p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Home</a></li>

                    <li className=" text-lg"><a href="#" className="tracking-wide p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Obras</a></li>

                    <li className=" text-lg"><a href="#" className="tracking-wide p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Quienes Somos</a></li>

                    <li className="text-lg ">
                        <a href="#" className="tracking-wide p-3 rounded transition
                        ease-in-out bg-orange-500 duration-300">Contacto</a> 
                    </li>

                    
                </ul> */}

        <ul
          class={`md:flex md:items-center  md:z-auto md:static absolute z-1 bg-slate-800 text-center md:text-start md:py-5 md:px-7 w-full left-0 md:w-auto ${
            clicked ? "top-0" : "top-[-400px]"
          } transition-all ease-in duration-500 rounded py-12`}
        >
          <li>{clicked ? <VscClose onClick={handleClick} className="bg-orange-500 rounded text-4xl absolute top-5 right-12"/> : null}</li>
          <li class="mx-4 my-8 md:my-0">
            <a
              href="#"
              class="text-xl tracking-wide p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Inicio
            </a>
          </li>
          <li class="mx-4 my-8 md:my-0">
            <a
              href="#"
              class="text-xl tracking-wide p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Proyectos
            </a>
          </li>
          <li class="mx-4 my-8 md:my-0">
            <a
              href="#"
              class="text-xl tracking-wide p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Quienes Somos
            </a>
          </li>
          <li class="mx-4 my-12 md:my-0">
            <a
              href="#"
              class="text-xl tracking-wide p-3 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 bg-orange-500 duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>

        <div className="hidden lg:text-lg lg:ml-16 lg:flex lg:justify-center lg:items-center lg:gap-x-2">
          <FiPhoneCall className="text-3xl"></FiPhoneCall>

          <p href="#" className="">
            {" "}
            +54 9 341-692-4953
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
