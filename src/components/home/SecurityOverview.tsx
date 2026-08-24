import "./SecurityOverview.css";

function SecurityOverview() {
  return (
    <section className="security-overview">
      <div className="security-overview__header">
        <div className="security-overview__label">
          <span>03</span>
          <span>SECURITY</span>
        </div>

        <div className="security-overview__intro">
          <h2>
            Security is part
            <br />
            of the architecture.
          </h2>

          <p>
            Quail is being designed with security as a core part of the
            communication workflow rather than as an afterthought.
          </p>
        </div>
      </div>

      <div className="security-overview__features">
        <article className="security-overview__feature">
          <span className="security-overview__number">01</span>

          <h3>Confidentiality</h3>

          <p>
            Protecting the contents of communication is central to the
            Quail design.
          </p>
        </article>

        <article className="security-overview__feature">
          <span className="security-overview__number">02</span>

          <h3>Secure Processing</h3>

          <p>
            Security mechanisms are integrated into the communication
            workflow rather than separated from it.
          </p>
        </article>

        <article className="security-overview__feature">
          <span className="security-overview__number">03</span>

          <h3>Future Resilience</h3>

          <p>
            Quail is being developed with the changing security
            landscape in mind.
          </p>
        </article>
      </div>
    </section>
  );
}

export default SecurityOverview;