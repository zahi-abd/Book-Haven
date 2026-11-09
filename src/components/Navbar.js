import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import ThemeContext from "../context/Theme";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <span className="navbar__brand">BookHaven</span>

        {/* Navigation links */}
        <div className="navbar__links">
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/cart" className="navbar__cart-link">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
