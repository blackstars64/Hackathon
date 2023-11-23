import { useRef, useState } from "react";

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
    audio.volume = 0.1;
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
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
