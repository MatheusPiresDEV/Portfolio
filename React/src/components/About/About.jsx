import React from "react";
import styles from "./About.module.css"; // Importa os estilos CSS do módulo
import { getImageUrl } from "../../utils"; // Importa a função utilitária para obter URLs de imagens

// Define o componente funcional `About`
export const About = () => {
  return (
    // Define uma seção HTML com a classe container e o ID 'sobre'
    <section className={styles.container} id="sobre">
      {/* Título da seção */}
      <h2 className={styles.title}>Sobre</h2>

      {/* Conteúdo da seção */}
      <div className={styles.content}>

        {/* Imagem sobre mim */}
        <div>
          
        </div>
        <img
          src={getImageUrl("about/AboutMe.jpg")}
          alt="Uma foto minha"
          className={styles.aboutImage}
        />

        {/* Lista de itens sobre mim */}
        <ul className={styles.aboutItems}>

          {/* Item sobre Desenvolvimento Front-End */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-End</h3>
              <p>
                Sou um desenvolvedor front-end, tenho experiência com várias tecnologias
              </p>
            </div>
          </li>

          {/* Item sobre Desenvolvimento Backend */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Tenho experiência em desenvolvimento backend, focado na criação de sistemas robustas e eficientes
              </p>
            </div>
          </li>

        </ul>

      </div>

    </section>
  );
};
