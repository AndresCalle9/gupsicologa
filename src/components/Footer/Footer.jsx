import React, { useEffect, useState } from "react";

import Image from "next/image";
import logo from "../../../public/assets/logo2.png";
import wpp from "../../../public/assets/wpp.png";
import ig from "../../../public/assets/ig.png";
import lc from "../../../public/assets/lc.png";
import Link from "next/link";
import s from "./Footer.module.scss";
import footerImg from "../../../public/assets/footerImg.png"
import footerImgD from "../../../public/assets/footerImgD.png"


const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

  const img = screenWidth < 768 ? footerImg : footerImgD;

  return (
    <div className={s.container}>
      <div className={s.vectors}>
        <div className={s.imgFooter}>
          <Image
            src={img}
            alt="fondo del footer"
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </div>
      <div className={s.top}>
        <div className={s.icon}>
          <Link href="https://www.instagram.com/psicologagloriauribe/">
            <a target="_blank">
              <div className={s.imgSct5}>
                <Image
                  src={ig}
                  alt="icono instagram"
                  placeholder="blur"
                  layout="responsive"
                />
              </div>
              <h3>@psicologagloriauribe</h3>
            </a>
          </Link>
        </div>
        <div className={s.icon}>
          <Link href="https://wa.link/nmup20">
            <a target="_blank">
              <div className={s.imgSct5}>
                <Image
                  src={wpp}
                  alt="icono whatsapp"
                  placeholder="blur"
                  layout="responsive"
                />
              </div>
              <h3>+57 322 582 0330</h3>
            </a>
          </Link>
        </div>
        <div className={s.icon}>
          <a>
            <div className={s.imgSct5}>
              <Image
                src={lc}
                alt="icono ubicacion"
                placeholder="blur"
                layout="responsive"
              />
            </div>
            <h3>Calle 71 sur 34-314 Sabaneta Ed. Mantis Apto 1408</h3>
          </a>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.icon}>
          <Link href="/">
            <a>
              <div className={s.imgSct5}>
                <Image
                  src={logo}
                  alt="logo Gloria Uribe piscológia"
                  placeholder="blur"
                  layout="responsive"
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
