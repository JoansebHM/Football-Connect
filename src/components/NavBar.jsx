import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/" className="option">
              Home
            </Link>
          </li>
          <li>
            <Link to="/account" className="option">
              Account
            </Link>
          </li>
          <li>
            <Link to="#" className="option">
              Wallet
            </Link>
          </li>
          <li>
            <Link to="#" className="option">
              Find Match
            </Link>
          </li>
          <li>
            <a href="#" className="option">
              Watch Game
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
