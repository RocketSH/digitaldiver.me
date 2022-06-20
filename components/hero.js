import React from "react";
import HeroNav from "./hero-nav";

function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle">Hi there, I am</h1>
          <h1 className="title">ShuHan</h1>
          <div />
        </div>
      </div>
      <HeroNav />
    </section>
  );
}
export default Hero;
