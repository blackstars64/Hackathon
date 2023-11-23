import { useLoaderData, useParams } from "react-router-dom";

function Cadeaux() {
  const data = useLoaderData();
  const { id } = useParams();
  const dataCadeaux = data.filter((cadeau) => cadeau.id === id);
  {
    // dataCadeaux[0].img
  }
  return <img src="../../src/assets/images/caca.png" alt="" />;
}

export default Cadeaux;
