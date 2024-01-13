import { useLoaderData } from "react-router-dom";
import AdventCalendar from "./components/AdventCalendar";
import "./css/app.css";
import AudioPlayer from "./utils/AudioPlayer";
import backMusic from "../src/assets/songs/background-music.wav";
import pereNoel from "../src/assets/images/pere-noel.gif";
import traineau from "../src/assets/images/traineau-noel.gif";
import snow from "./assets/img/snowflake.png";
import snowReact from "./assets/img/react-red-tr-50.png";
import "./css/snowfall.css";

const App = () => {
  const data = useLoaderData();
  const audioSource = backMusic;

  return (
    <div className="app">
      <snowfall>
        <snowflake>
          <img className="react-red" src={snowReact} alt="logo react" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
        <snowflake>
          <img src={snow} alt="neige" />️
        </snowflake>
      </snowfall>
      <img className="traineau-noel" src={traineau} alt="traineau" />
      <AudioPlayer audioSrc={audioSource} />
      <h1 className="title">
        Calendrier de L&apos;Arrière
        <img className="pere-noel" src={pereNoel} alt="" />
      </h1>
      <AdventCalendar data={data} />
    </div>
  );
};

export default App;
