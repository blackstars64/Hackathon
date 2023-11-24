import porte from "../../src/assets/songs/porte.wav";

function Porte() {
  const audio = new Audio(porte);
  audio.volume = 1;
  audio.play();
}

export default Porte;
