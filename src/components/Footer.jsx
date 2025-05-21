import { Link } from "react-router-dom";
import logofooter from "../assets/logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logofooter} alt="Logo Footer" className="logofooter" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
