import React from "react";
import heroImage from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Mes Projets React</h1>
          <p>
            Bienvenue sur mon site web dédié à la présentation de mes mini
            projets en React ! Ici, vous découvrirez une collection variée de
            projets que j'ai réalisés pour explorer et maîtriser les différentes
            facettes de cette bibliothèque JavaScript puissante. Chaque projet
            met en avant des fonctionnalités spécifiques, des techniques
            modernes et des solutions créatives que j'ai développées pour
            répondre à des défis particuliers. J'espère que vous apprécierez
            cette vitrine de mon travail et que cela vous inspirera dans vos
            propres aventures en développement web. Bonne exploration !
          </p>
        </div>
        <div className="img-container">
          <img src={heroImage} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
