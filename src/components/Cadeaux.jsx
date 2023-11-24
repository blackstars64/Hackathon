import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useLoaderData, useParams } from "react-router-dom";
import "../css/Cadeaux.css";
import { Link } from "react-router-dom";

// Importe le fichier sonore
import rire_Nelson from "../../src/assets/songs/rire-Nelson.wav";

function Cadeaux() {
  const data = useLoaderData();
  const { id } = useParams();
  const dataCadeaux = data.filter((cadeau) => cadeau.id === id);

  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    // Activer les confettis après un court délai (vous pouvez ajuster cela)
    const timeout = setTimeout(() => {
      setIsConfettiActive(true);
    }, 500);

    // Désactiver les confettis après un certain temps (vous pouvez ajuster cela)
    const confettiTimeout = setTimeout(() => {
      setIsConfettiActive(false);
    }, 70000);

    // Nettoyer les timeouts lors du démontage du composant
    return () => {
      clearTimeout(timeout);
      clearTimeout(confettiTimeout);
    };
  }, []);

  // Fonction pour jouer le son
  const jouerSon = () => {
    const audio = new Audio(rire_Nelson);
    audio.play();
  };

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
      <p className="yeux"> 👀</p>
      <Link className="return" to="/" onClick={jouerSon}>
        Retour
      </Link>
    </div>
  );
}

export default Cadeaux;
