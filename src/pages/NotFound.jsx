import { Link } from "react-router-dom";
import "../styles/pages/_notfound.scss";

function NotFound() {
  return (
    <div className="notfoundpage">
      <h1 className="title-notfound">404</h1>
      <p className="text-notfound">
        Oups! La page que vous demandez n'existe plus
      </p>
      <Link to="/" className="link-notfound">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
export default NotFound;
