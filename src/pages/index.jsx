import React from "react";
import Image from "next/image";
import s from "../styles/pages/Home.module.scss";
import img1 from "../../public/assets/imgSect1.png";
import img1_1 from "../../public/assets/imgSect1-2.png";
import profile from "../../public/assets/profile.png";
import img2 from "../../public/assets/img2.png";
import img2_2 from "../../public/assets/img2-2.png";
import Card from "../components/Card/Card";
import img4 from "../../public/assets/img4.png";
import img4_2 from "../../public/assets/img4-1.png";
import computer from "../../public/assets/computer.png";
import people from "../../public/assets/people.png";

const index = () => {
  return (
    <div className={s.container}>
      {/* section 1*/}
      <div className={s.section1}>
        <h3>Te acompaño en tu proceso Psicológico</h3>
        <a className={s.btn} href="https://wa.link/nmup20">
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
        <h3>Áreas de atención</h3>
        <Card
          title={"Duelo"}
          text={
            "El duelo es un proceso psicológico de elaboración y adaptación ante una pérdida emocional."
          }
          docPath={"duelo.pdf"}
        />
        <Card
          title={"Arte-terapia"}
          text={
            "La Arteterapia es un tipo de terapia artística que consiste en la utilización del arte como vía terapéutica"
          }
          docPath={""}
        />
        <Card
          title={"Depresión"}
          text={
            "Es una enfermedad caracterizada por una tirsteza persistente y por la pérdida de interés en las actividades que normalmente disfruta."
          }
          docPath={"Depresión.pdf"}
        />
      </div>
      {/* Section 4 */}
      <div className={s.section4}>
        <div className={s.vectors}>
          <div className={s.imgSct4}>
            <Image
              src={img4}
              alt="image principal sección 4"
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <div className={s.imgSct4_2}>
            <Image
              src={img4_2}
              alt="image secundaria sección 4"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </div>
        <div className={s.info}>
          <h2>¿Cuándo ir a terapia?</h2>
          <div></div>
          <p>
            Haz sufrido un trauma en el paso y no puedes dejar de pensar en
            ello.
          </p>
          <div></div>
          <p>Te sientes descontento en actividades que antes disfrutabas</p>
          <div></div>
          <p>Sientes que tu malestar emocional afecta tu vida diaria.</p>
          <div></div>
          <p>Si necesitas un espacio para ser escuchado y comprendido.</p>
          <div></div>
          <p>
            Cuando requieras una orientación ante una situación en particular.
          </p>

          <h3>Rercuerda</h3>
          <h4>¡Todo malestar emocional es importante!</h4>
        </div>
      </div>
      {/* Section 5*/}
      <div className={s.section5}>
        <h2>¿Cómo puedo ayudarte?</h2>
        <p>
          Nuestro consultorio es un espacio creado pensando en tu bienestar y
          tranquilidad. Donde te ayudaré a entender tus pensamientos, la forma
          en que actuas y tus emociones, aplicando asi tecnicas psicologicas que
          contribuyen al cambio, haciendo que te sientas mejor.
        </p>
        <div className={s.imgSct5}>
          <Image
            src={computer}
            alt="icono de computador"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <h3>Consulta virtual</h3>
        <p>
          Desde la comodida de tu hogar, crearemos un espacio donde estaremos
          conecados tu y yo.
        </p>
        <a className={s.btn} href="https://wa.link/nmup20">
          ¡Quiero una cita!
        </a>
        <div className={s.imgSct5}>
          <Image
            src={people}
            alt="icono de personas"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <h3>Consulta presencial</h3>
        <p>
          Desde nuestro consultorio, ubicado en Sabaneta, Antioquio, estaremos
          juntos en este proceso de cambio.
        </p>
        <a className={s.btn} href="https://wa.link/nmup20">
          ¡Quiero una cita!
        </a>
      </div>
    </div>
  );
};

export default index;
