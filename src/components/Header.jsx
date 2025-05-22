import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="Logo Kasa" className="logo" />
        </NavLink>
        <div className="main-menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            À Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
