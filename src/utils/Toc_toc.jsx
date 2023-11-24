import toc_toc from "../../src/assets/songs/toc-toc.wav";

function Toc_toc() {
  const audio = new Audio(toc_toc);
  audio.volume = 0.2;
  audio.play();
}

export default Toc_toc;
