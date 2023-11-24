import { useRef, useState } from "react";
import "../css/audioplayer.css";
import Toc_toc from "./Toc_toc";
import pereD from "../../src/assets/images/noel-dance-play.gif";
import skullD from "../../src/assets/images/danse-squelette-play.gif";

const AudioPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    const audio = audioRef.current;
    audio.play();
    audio.volume = 0.2;
    setIsPlaying(true);
  };

  const pause = () => {
    const audio = audioRef.current;
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <div>
        <audio ref={audioRef} src={props.audioSrc} />
        <button
          className="play"
          onClick={() => {
            togglePlay();
            Toc_toc();
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      {isPlaying ? (
        <>
          <img className="d-img pere-d" src={pereD} alt="" />
          <img className="d-img skull-d" src={skullD} alt="" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AudioPlayer;
