import { Link } from "react-router-dom";
import Button from "../common/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">QUANTUM-RESILIENT COMMUNICATION</p>

        <h1 className="hero__title">
          Secure communication,
          <br />
          built for the quantum era.
        </h1>

        <p className="hero__description">
          Quail brings quantum-resilient security to email without
          sacrificing the communication experience you already know.
        </p>

        <div className="hero__actions">
          <Link to="/get-verified">
            <Button>Get Verified</Button>
          </Link>

          <a href="#what-is-quail" className="hero__secondary-action">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;