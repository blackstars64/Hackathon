import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useLoaderData, useParams } from "react-router-dom";
import "../css/Cadeaux.css";
import { Link } from "react-router-dom";

function Cadeaux() {
  const data = useLoaderData();
  const { id } = useParams();
  const dataCadeaux = data.filter((cadeau) => cadeau.id === id);

  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsConfettiActive(true);
    }, 500);

    const confettiTimeout = setTimeout(() => {
      setIsConfettiActive(false);
    }, 70000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(confettiTimeout);
    };
  }, []);

  if (!dataCadeaux.length) {
    return <div>Cadeau non trouvé</div>;
  }

  return (
    <div className="screen">
      <div className="cadeau-container">
        {isConfettiActive && <Confetti />}
        <img className="cadeau-image" src={dataCadeaux[0].img} alt="" />
      </div>
      <p className={dataCadeaux[0].text !== "" ? "text-data" : "no-text"}>
        {dataCadeaux[0].text}{" "}
      </p>

      <Link className="return" to="/">
        Retour
      </Link>
    </div>
  );
}

export default Cadeaux;
