import React from "react";

function About() {
  return (
    <div className="main-content">
      <div className="section-light about-me" id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered about-me-title">About Me</h1>
          </div>
          <div className="columns">
            <div className="column is-6 has-vertically-aligned-content">
              <div className="columns">
                <div className="motto">
                  <p>Where are you? Here.</p>
                  <p>What time is it? Now.</p>
                  <p>What are you? This moment.</p>
                  <p className="motto__source">
                    ― Dan Millman, Way of the Peaceful Warrior: A Book That
                    Changes Lives
                  </p>
                </div>
              </div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>FrontEnd</strong>
                  </p>
                  <p>
                    <a href="https://bulma.io/">#Bulma</a>
                  </p>
                  <p>
                    <a href="https://reactjs.org/">#React</a>
                  </p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>BackEnd</strong>
                  </p>
                  <p>
                    <a href="https://rubyonrails.org/">#Ruby on Rails</a>
                  </p>
                  <p>
                    <a href="https://www.postgresql.org/">#PostgreSQL</a>
                  </p>
                </div>
              </div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p className="subheading">digital-diver@protonmail.com</p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>GitHub</strong>
                  </p>
                  <p className="subheading">
                    <a href="https://github.com/RocketSH">
                      https://github.com/RocketSH
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-6 right-image " data-aos="fade-left">
              <img
                className="is-rounded"
                src="me.jpg"
                width="600"
                height="375"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
