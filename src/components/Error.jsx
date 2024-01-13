import { Link } from "react-router-dom";
import imgError from "../../src/assets/images/erreur404.png";
import "../css/Error.css";
import Rire_Nelson from "../utils/Rire_Nelson";

function Error() {
  return (
    <div>
      <img src={imgError} alt="" />
      <Link to="/">
        <button className="WHAT" onClick={Rire_Nelson}>
          Revenir
        </button>
      </Link>
    </div>
  );
}

export default Error;
