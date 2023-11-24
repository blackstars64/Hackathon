import porte from "../../src/assets/songs/porte.wav";

function Porte() {
  const audio = new Audio(porte);
  audio.volume = 0.2;
  audio.play();
}

export default Porte;
