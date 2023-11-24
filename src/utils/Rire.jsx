import rire from "../../src/assets/songs/rire.wav";

function Rire() {
  const audio = new Audio(rire);
  audio.volume = 0.2;
  audio.play();
}

export default Rire;
