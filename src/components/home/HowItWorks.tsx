import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__header">
        <div className="how-it-works__label">
          <span>02</span>
          <span>HOW IT WORKS</span>
        </div>

        <div className="how-it-works__intro">
          <h2>Security that works behind the scenes.</h2>

          <p>
            Quail is designed to add a dedicated security layer to the
            familiar email workflow, keeping the experience simple for
            the person sending and receiving a message.
          </p>
        </div>
      </div>

      <div className="how-it-works__steps">
        <article className="how-it-works__step">
          <span className="how-it-works__number">01</span>

          <h3>Connect</h3>

          <p>
            Users access their secure email environment through Quail.
          </p>
        </article>

        <article className="how-it-works__step">
          <span className="how-it-works__number">02</span>

          <h3>Protect</h3>

          <p>
            Messages pass through Quail's security layer before
            continuing through the email workflow.
          </p>
        </article>

        <article className="how-it-works__step">
          <span className="how-it-works__number">03</span>

          <h3>Deliver</h3>

          <p>
            The protected message continues to its intended recipient
            while Quail handles the underlying security process.
          </p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;