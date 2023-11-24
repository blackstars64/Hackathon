import "../css/AdventCalendar.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import Porte from "../utils/Porte";
import cibleCursor from "../../src/assets/images/cible-cursor.svg";
import PropTypes from "prop-types";
const cursorStyle = {
  cursor: `url(${cibleCursor}), auto`,
};
const AdventCalendar = ({ data }) => {
  const [openedDoors, setOpenedDoors] = useLocalStorage("doors", []);

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

      const imgData = data.filter((img) => img.id === i.toString());

      const doorStyle = isDoorOpened
        ? {
            backgroundImage: `url(${imgData[0].objetimg}) `,
          }
        : {};

      doors.push(
        <div
          key={i}
          className={`door ${isDoorOpened ? "opened" : ""}`}
          style={doorStyle}
          onClick={() => {
            handleDoorClick(i);
            Porte();
          }}
        >
          {isDoorOpened ? (
            <Link to={`cadeaux/${i}`} className="click"></Link>
          ) : (
            i
          )}
        </div>
      );
    }

    return doors;
  };

  return (
    <div style={cursorStyle}>
      <div className="advent-calendar">{renderDoors()}</div>
    </div>
  );
};
AdventCalendar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      objetimg: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default AdventCalendar;
