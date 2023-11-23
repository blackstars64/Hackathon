import { useLoaderData } from "react-router-dom";
import AdventCalendar from "./components/AdventCalendar";
import "./css/app.css";

const App = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="app">
      <h1>Calendrier de lAvent</h1>
      <AdventCalendar />
    </div>
  );
};

export default App;
