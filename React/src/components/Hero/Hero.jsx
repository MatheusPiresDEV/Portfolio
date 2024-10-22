import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ola, me chamo Matheus</h1>
        <p className={styles.description}>
          Sou desenvolvedor Full-Steack, recem formado em desenvolvimento de sistemas. 
        </p>
        <a href="mailto:matheusgustavodasilvapires@gmail.com" className={styles.contactBtn}>
          Entre em contato
        </a>
      </div>
      <div><img
        src={getImageUrl("hero/AboutMe.jpg")}
        alt="Foto minha"
        className={styles.heroImg}
      />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
