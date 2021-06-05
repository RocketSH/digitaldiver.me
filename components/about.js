import React from "react";

function About() {
  return (
    <div className="main-content">
      <div className="section-light about-me" id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered section-title">About Me</h1>
          </div>
          <div className="columns is-multiline">
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p>
                I have worked at Footwear manufacturing development center
                around 5 years in China and Vietnam. I was inspired after joined
                internal SAP project then decided to learn more acknowlege about
                digital transformation and modernation web development.
              </p>
              <br />
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>using</strong>
                  </p>
                  <p>
                    <a href="https://bulma.io/">#Bulma</a>
                  </p>
                  <p>
                    <a href="https://reactjs.org/">#React</a>
                  </p>
                  <p>
                    <a href="https://www.nginx.com/">#NGINX</a>
                  </p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>learning</strong>
                  </p>
                  <p>
                    <a href="https://nodejs.org/en//">#Node.js</a>
                  </p>
                  <p>
                    <a href="https://www.postgresql.org/">#PostgreSQL</a>
                  </p>
                </div>
              </div>

              <br />
              <div className="is-divider"></div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p className="subheading">shannon-hu@protonmail.com</p>
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
                src="https://picsum.photos/id/366/600/375"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
