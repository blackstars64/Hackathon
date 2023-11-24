import { useRef, useState } from "react";
import "../css/audioplayer.css";
import Toc_toc from "./Toc_toc";

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
    audio.volume = 1;
    setIsPlaying(true);
  };

  const pause = () => {
    const audio = audioRef.current;
    audio.pause();
    setIsPlaying(false);
  };

  return (
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
  );
};

export default AudioPlayer;
