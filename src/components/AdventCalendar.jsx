import { useState } from "react";
import "../css/AdventCalendar.css";
import { Link } from "react-router-dom";

const AdventCalendar = () => {
  const [openedDoors, setOpenedDoors] = useState([]);

  const handleDoorClick = (doorNumber) => {
    if (!openedDoors.includes(doorNumber)) {
      setOpenedDoors([...openedDoors, doorNumber]);
    }
  };

  const renderDoors = () => {
    const totalDoors = 25;
    const doors = [];

    for (let i = 1; i <= totalDoors; i++) {
      const isDoorOpened = openedDoors.includes(i);

      const doorStyle = isDoorOpened
        ? {
            backgroundImage: "url('../assets/images/advent-4623521_640.png')",
          }
        : {};

      doors.push(
        <div
          key={i}
          className={`door ${isDoorOpened ? "opened" : ""}`}
          style={doorStyle}
          onClick={() => handleDoorClick(i)}
        >
          {isDoorOpened ? <Link to={`cadeaux/${i}`}> 🎁 </Link> : i}
        </div>
      );
    }

    return doors;
  };

  return <div className="advent-calendar">{renderDoors()}</div>;
};

export default AdventCalendar;
