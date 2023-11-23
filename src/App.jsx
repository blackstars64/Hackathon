import { useLoaderData } from "react-router-dom";
import AdventCalendar from "./components/AdventCalendar";
import "./css/app.css";

const App = () => {
  const data = useLoaderData();

  return (
    <div className="app">
      <h1>Calendrier de lAvent</h1>
      <AdventCalendar data={data} />
    </div>
  );
};

export default App;
