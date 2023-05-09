import { useState } from "react";

import NavBar from "./NavBar";

import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";

import Logo from "../assets/logo.png";

const Header = ({ FiPhoneCall }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {   
      setClicked(!clicked);
  };

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="200"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0"
      className="flex bar:pl-8 pt-3 md:pt-7 md:pl-0 md:pr-0 justify-around ph:justify-between items-center md:mb-20 w-full"
    >
      <h1 className="text-5xl mr-20">
        <Link aria-label="Logo GIGA, volver a la pagina de inicio" to="/">
          <img src={Logo} alt="GIGA CONSTRUCTORA ROSARIO" />
        </Link>
      </h1>

      <button
        aria-label="Boton para dispositivos moviles, abre el menu de navegacion"
        className="block md:hidden"
      >
        <BiMenu className="text-5xl" onClick={handleClick}></BiMenu>
      </button>

      <NavBar
        FiPhoneCall={FiPhoneCall}
        handleClick={handleClick}
        clicked={clicked}
      />
    </div>
  );
};

export default Header;
