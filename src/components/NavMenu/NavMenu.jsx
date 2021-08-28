import React from "react";
import s from "./NavMenu.module.scss";
import Link from "next/link";


const NavMenu = ({ toggleMenu }) => {
 
  return (
    <nav id="menu-mobile" className={s.menuMobile}>
      <p className={s.close} onClick={toggleMenu} >x</p>
        <div className={s.container}>
          <Link href="/">
            <a onClick={() => toggleMenu()}>Sobre mí</a>
          </Link>
          <Link href="/products">
            <a onClick={() => toggleMenu()}>Servicios</a>
          </Link>
          <Link href="/blog">
            <a onClick={() => toggleMenu()}>Consulta</a>
          </Link>
          <Link href="/contact">
            <a onClick={() => toggleMenu()}>Contáctame</a>
          </Link>
        </div>
    </nav>
  );
};

export default NavMenu;
