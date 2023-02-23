import React from "react";
import Caixa from "../img/caixa.png";
import Factoria from "../img/factoriaF5.png";
import Simplon from "../img/Simplon.png";

export const AboutMe = () => {
  return (
    <>
      <p>
        Animap es un proyecto desarrollado como parte de la Hackaton 2023, un
        evento organizado por Factoría F5 con el patrocinio de CaixaBank tech.
        Nuestro proyecto consiste en una página para poner en contacto a
        personas que quieran dar en adopción a un animal con personas que
        quieran adoptar. En nuestra web se puede tanto publicar anuncios
        ofreciendo mascotas en adopción, como seleccionar un animal para
        solicitar su adopción.{" "}
      </p>

      <h3>Patrocinadores</h3>
      <hr />
      <img src={Caixa} alt="" />
      <img src={Factoria} alt="" />
      <img src={Simplon} alt="" />
    </>
  );
};
export default AboutMe;
