import { Link, useLocation } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

const NavBar = ({ FiPhoneCall, handleClick, clicked }) => {
  const location = useLocation();

  return (
    <>
      <nav className="shadow-lg md:flex">
        <ul
          class={`md:flex md:items-center  md:z-auto md:static absolute z-50  bg-slate-600 md:bg-slate-800 text-center md:text-start md:py-5 md:px-7 w-full left-0 md:w-auto ${
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
              className={`${
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
              } text-sm md:text-xl tracking-wide p-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
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
    </>
  );
};

export default NavBar;
