import { Link, useLocation } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { isMobile } from "react-device-detect";

const NavBar = ({ FiPhoneCall, handleClick, clicked }) => {
  const location = useLocation();

  return (
    <>
      <nav className={`md:flex`}>
        <ul
          className={`md:flex md:items-center  md:z-auto md:static absolute z-50  bg-[#000] md:bg-transparent text-center md:text-start md:py-5 md:px-7 w-full left-0 md:w-auto ${
            clicked ? "top-0" : "top-[-400px]"
          } transition-all ease-in duration-500 rounded py-12 `}
        >
          <li>
            {clicked && isMobile === true && (
              <VscClose
                onClick={handleClick}
                className="bg-orange-500 rounded text-4xl absolute top-5 right-12"
              />
            )}
          </li>
          <li className="mx-4 my-8 md:my-0">
            <Link
              to="/"
              onClick={handleClick}
              className={`${
                location.pathname === "/"
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "hover:bg-indigo-300"
              } text-base ph:text-xl tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
            >
              Inicio
            </Link>
          </li>
          <li className="mx-4 my-8 md:my-0">
            <Link
              to="/proyectos"
              onClick={handleClick}
              className={`${
                location.pathname === "/proyectos"
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "hover:bg-indigo-300"
              } text-base ph:text-xl  tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
            >
              Proyectos
            </Link>
          </li>
          <li className="mx-4 my-8 md:my-0">
            <Link
              to="/nosotros"
              onClick={handleClick}
              className={`${
                location.pathname === "/nosotros"
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "hover:bg-indigo-300"
              } text-base ph:text-xl tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
            >
              Nosotros
            </Link>
          </li>
          <li className="mx-4 my-12 md:my-0">
            <Link
              to="/contacto"
              onClick={handleClick}
              className="text-xl tracking-wide p-2 rounded transition
                      ease-in-out hover:-translate-y-1 hover:scale-110 bg-white text-black duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="hidden md:text-lg md:ml-16 ph:flex md:justify-center md:items-center md:gap-x-2">
          <FiPhoneCall className="text-3xl"></FiPhoneCall>

          <p> +54 9 341-692-4953</p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
