import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__brand">
          QUAIL
        </Link>

        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/get-verified">Get Verified</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;