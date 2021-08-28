import React from "react";
import s from "./Card.module.scss";

const Card = ({ text, title, docPath }) => {
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <p>{text}</p>
      {title == "Arte-terapia" ? (
        <p>Pronto!</p>
      ) : (
        <a href={`/docs/${docPath}`} target="_blank">
          {" "}
          Ver más
        </a>
      )}
    </div>
  );
};

export default Card;
