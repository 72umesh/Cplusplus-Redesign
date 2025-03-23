import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-name">
          cplusplus
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/tutorials" className="nav-link">
          Tutorials
        </Link>
        <Link to="/reference" className="nav-link">
          References
        </Link>
        <Link to="/articles" className="nav-link">
          Articles
        </Link>
        <Link to="/forum" className="nav-link">
          Forum
        </Link>
      </div>
      <div className="navbar-login">
        <Link to="/" className="navbar-login-link">
          Log In / Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
