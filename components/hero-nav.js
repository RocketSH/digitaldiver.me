import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const HeroFooter = () => (
  <div className="hero-nav">
    <div className="hero-nav--wrapper">
      <div className="columns">
        <div className="column is-12 hero-menu-desktop has-text-centered">
          <Link href="/" className="nav-items">
            Home
          </Link>
          <Link href="/blog" className="nav-items">
            Blog
          </Link>
          <Link href="/contact" className="nav-items">
            Contact
          </Link>
          <Link href="/resume" className="nav-items">
            Resume
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeroFooter;
