import React from "react";
import Link from "next/link";
import s from "./WhatsappFloat.module.scss"

const WhastappFloat = () => {
  return (
    <div className={s.container}>
      <Link href="https://wa.link/nmup20">
        <a target="_blank">
            <img
              src="/whatsappFloat.png"
            />
        </a>
      </Link>
    </div>
  );
};

export default WhastappFloat;
