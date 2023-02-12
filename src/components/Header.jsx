import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { VscClose } from "react-icons/vsc";

import { BiMenu } from "react-icons/bi";

import Logo from "../assets/logo.png";

const Header = ({ Aos, FiPhoneCall }) => {
  const [clicked, setClicked] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    if (window.innerWidth < 1000) {
      setClicked(!clicked);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="200"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0"
      className="flex pl-8 pt-3 md:pt-7 md:pl-0 md:pr-0 justify-between items-center md:mb-20 w-full"
    >
      <h1 className="text-5xl ">
        <Link aria-label="Logo GIGA, volver a la pagina de inicio" to='/'><img src={Logo} alt="" /></Link>
      </h1>

      <button aria-label="Boton para dispositivos moviles, abre el menu de navegacion" className="block ml-24 lg:hidden">
        <BiMenu className="text-5xl" onClick={handleClick}></BiMenu>
      </button>

      <nav className="shadow-lg  md:flex">
        <ul
          class={`md:flex md:items-center  md:z-auto md:static absolute z-1 bg-slate-600 md:bg-slate-800 text-center md:text-start md:py-5 md:px-7 w-full left-0 md:w-auto ${
            clicked ? "top-0" : "top-[-400px]"
          } transition-all ease-in duration-500 rounded py-12`}
        >
          <li>
            {clicked ? (
              <VscClose
                onClick={handleClick}
                className="bg-orange-500 rounded text-4xl absolute top-5 right-12"
              />
            ) : null}
          </li>
          <li class="mx-4 my-8 md:my-0">
            <Link
              to="/"
              onClick={handleClick}
              class={`${
                location.pathname === "/"
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "hover:bg-indigo-200"
              } text-xl tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
            >
              Inicio
            </Link>
          </li>
          <li class="mx-4 my-8 md:my-0">
            <Link
              to="/proyectos"
              onClick={handleClick}
              class={`${
                location.pathname === "/proyectos"
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "hover:bg-indigo-300"
              } text-xl tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
            >
              Proyectos
            </Link>
          </li>
          <li class="mx-4 my-8 md:my-0">
            <Link
              to="/quienes-somos"
              onClick={handleClick}
              class={`${
                location.pathname === "/quienes-somos"
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "hover:bg-indigo-300"
              } text-xl tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
            >
              Quienes Somos
            </Link>
          </li>
          <li class="mx-4 my-12 md:my-0">
            <Link
              to="/contacto"
              onClick={handleClick}
              class="text-xl tracking-wide p-2 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 bg-orange-500 duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="hidden md:text-lg md:ml-16 md:flex md:justify-center md:items-center md:gap-x-2">
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
