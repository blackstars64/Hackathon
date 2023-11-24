import rire_Nelson from "../../src/assets/songs/rire-Nelson.wav";

function Rire_Nelson() {
  const audio = new Audio(rire_Nelson);
  audio.volume = 1;
  audio.play();
}

export default Rire_Nelson;
