import React from "react";
import Image from "next/image";
import s from "../styles/pages/Home.module.scss";
import img1 from "../../public/assets/imgSect1.png";
import img1_1 from "../../public/assets/imgSect1-2.png";
import profile from "../../public/assets/profile.png";
import img2 from "../../public/assets/img2.png";
import img2_2 from "../../public/assets/img2-2.png";

const index = () => {
  return (
    <div className={s.container}>
      {/* section 1*/}
      <div className={s.section1}>
        <h3>Te acompaño en tu proceso Psicológico</h3>
        <a className={s.btn} href="">
          ¡Quiero una cita!
        </a>
        <div className={s.vectors}>
          <div className={s.imgSct1}>
            <Image
              src={img1}
              alt="image principal sección 1"
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <div className={s.imgSct1_1}>
            <Image
              src={img1_1}
              alt="image secundaria sección 2"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className={s.section2}>
        <div className={s.background}>
          <div className={s.imgSct2}>
            <Image
              src={profile}
              alt="image principal sección 1"
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <p>
            Mi nombre es Gloria Uribe Garces, soy psicóloga de la institución
            universitaria de Envigado.
          </p>
          <p>
            Luego de 11 años de experiencia como secretaria del área del
            mercadeo, tome la decisión de estudiar psicologia, teniendo la
            oportunidad de realizar las practicas en el área de gestión humana,
            descubriendo así mi pasión por conocer las personas, sus
            motivaciones y frustraciones, con la certeza de porder ayudar por
            medio de mi saber.{" "}
          </p>
          <p>Me encantaría acompañarte en tu proceso psicológico.</p>
        </div>
        <div className={s.vectors}>
          <div className={s.imgSct2}>
            <Image
              src={img2}
              alt="image principal sección 2"
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <div className={s.imgSct2_2}>
            <Image
              src={img2_2}
              alt="image secundaria sección 2"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className={s.section3}>
        <div className={s.background}>
          <h3>Áreas de atención</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
