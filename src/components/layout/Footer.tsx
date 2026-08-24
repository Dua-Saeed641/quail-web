import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>© 2026 Quail. All rights reserved.</p>

      <div>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;