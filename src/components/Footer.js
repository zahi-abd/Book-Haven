import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h3 className="footer__brand">BookHaven</h3>
        <p className="footer__tagline">Where books &amp; people meet.</p>
        <nav className="footer__nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
        <p className="footer__contact">
          <strong>Email:</strong>{" "}
          <a href="mailto:bookhaven@gmail.com">bookhaven@gmail.com</a>
        </p>
        <p className="footer__copy">© 2026 BookHaven. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
