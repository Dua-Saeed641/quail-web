import { Link } from "react-router-dom";
import Button from "../common/Button";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__content">
        <p className="cta__eyebrow">GET STARTED</p>

        <h2>
          Ready to explore
          <br />
          Quail?
        </h2>

        <p className="cta__description">
          Start by verifying your identity and learn how Quail's secure
          communication environment works.
        </p>

        <Link to="/get-verified">
          <Button>Get Verified</Button>
        </Link>
      </div>
    </section>
  );
}

export default CTA;