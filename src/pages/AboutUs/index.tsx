import React from "react";
import Footer from "../Main/Footer";
import "./index.scss";
const AboutUs = () => {
  return (
    <div className="">

    <div className="about">
      <div className="about__section">
        <div className="about__img about__img--1"></div>
        <div className="about__section--container">
          <p className="about__section--title">From Our Farm</p>
          <p className="about__section--desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            provident placeat error sequi quia reiciendis odit minus. Unde,
            reiciendis? Fuga at sint harum hic ad voluptates, quasi adipisci
            necessitatibus, officiis minus, rem possimus saepe quisquam
            perspiciatis. Maxime maiores alias tempora? Ullam a consequuntur
            dolor asperiores sint provident in error eveniet?
          </p>
        </div>
      </div>
      <div className="about__section section-middle">
        <div className="about__section--container">
          <p className="about__section--title">Cattle raised with passion and love</p>
          <p className="about__section--desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            id eum veritatis minima provident sequi autem sint et assumenda. Id
            ipsum, error maxime nam ut velit iusto? Cupiditate corrupti autem
            quas, eaque dolorem quis dicta voluptatum debitis nam? Molestias,
            possimus adipisci fuga dolorem, expedita nemo ipsam illo libero
            quasi sit eos maiores. Eum, earum eaque.
          </p>
        </div>
        <div className="about__img about__img--2"></div>
      </div>
      <div className="about__section">
        <div className="about__img about__img--3"></div>
        <div className="about__section--container">
          <p className="about__section--title">Visit our special shop</p>
          <p className="about__section--desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolor earum distinctio? Iste non inventore consequuntur, sapiente
            optio numquam atque, laboriosam debitis maiores deserunt nihil
            voluptas ducimus illo id ex! Vitae ea nam aliquam, sunt rem
            perspiciatis voluptates dolores voluptatum amet, officiis iste
            assumenda dicta earum hic adipisci minus esse commodi, corrupti
            temporibus obcaecati debitis!
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
