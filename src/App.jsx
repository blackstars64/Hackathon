import { useLoaderData } from "react-router-dom";
import AdventCalendar from "./components/AdventCalendar";
import "./css/app.css";
import AudioPlayer from "./utils/AudioPlayer";
import backMusic from "../src/assets/songs/background-music.wav";
import pereNoel from "../src/assets/images/pere-noel.gif";

const App = () => {
  const data = useLoaderData();
  const audioSource = backMusic;

  return (
    <div className="app">
      <AudioPlayer audioSrc={audioSource} />
      <h1>
        Calendrier de L&apos;Arrière
        <img className="pere-noel" src={pereNoel} alt="" />
      </h1>
      <AdventCalendar data={data} />
    </div>
  );
};

export default App;
