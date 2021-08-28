import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bars from "../../../public/assets/bars.png";
import logo from "../../../public/logo.png";
import s from "./Header.module.scss";
import NavMenu from "../NavMenu/NavMenu"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const openMenu = () => {
    const menuMobile = document.getElementById("menu-mobile");
    if (!toggleMenu) {
      menuMobile.classList.remove("closeMenuAnimation");
      menuMobile.classList.add("openMenuAnimation");
    } else {
      menuMobile.classList.remove("openMenuAnimation");
      menuMobile.classList.add("closeMenuAnimation");
    }
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.headerTop}>
          <div className={s.imgContainer}>
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  placeholder="blur"
                  alt="logo gloria uribe psicologa"
                />
              </a>
            </Link>
          </div>
          <div className={s.text}>
              <h3>Gloria Uribe</h3>
              <p>Piscóloga</p>
          </div>
          <div onClick={openMenu} className={s.menu}>
            <Image src={bars} alt="menu hamburguesa" />
          </div>
        </div>
      </header>
      <NavMenu toggleMenu={() => openMenu()} />
    </>
  );
};

export default Header;
