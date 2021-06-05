import React from "react";
import HeroNav from "./hero-nav";

function Hero() {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle">Hi there, I am</h1>
          <h1 className="title">Shannon Hu</h1>
          <h1 className="subtitle profession">
            A Frontend Developer&amp; Freediving Lover
          </h1>
          <div />
        </div>
      </div>
      <HeroNav />
    </section>
  );
}
export default Hero;
