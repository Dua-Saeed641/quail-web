import "./WhatIsQuail.css";

function WhatIsQuail() {
  return (
    <section id="what-is-quail" className="what-is-quail">
      <div className="what-is-quail__content">
        <div className="what-is-quail__label">
          <span>01</span>
          <span>WHAT IS QUAIL?</span>
        </div>

        <div className="what-is-quail__body">
          <h2>
            Email designed for
            <br />
            a changing security landscape.
          </h2>

          <p>
            Quail is a secure email platform designed to explore
            quantum-resilient communication while preserving the familiar
            experience of email.
          </p>

          <p>
            Our approach combines established email infrastructure with
            an additional security layer designed to protect the
            confidentiality of messages and their associated data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsQuail;