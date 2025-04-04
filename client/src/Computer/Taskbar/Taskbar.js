// Import CSS
import "./Taskbar.css";

// Import Components
import ExploreBar from "./ExploreBar/ExploreBar";

// Import Assets
import StartIcon from '../../Assets/start-icon.png';

export default function Taskbar({ active, setActive, runningApps, setRunningApps }) {
  // Get Date information
  const date = new Date(); 
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let indicator = "AM";

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hour >= 12) {
    indicator = "PM";

    if (hour !== 12) {
      hour -= 12;
    }
  }

  // Handle clicking a window
  const handleClick = (item) => {
    setActive(item.name);
  };

  // Return Component
  return(
    <section id="taskbar" className="windows95-border-no-black-white-top">
      {/* Taskbar */}
      {active === "start" ?
        <div id="taskbar-start" className="windows95-inverted-button-active">

          {/* Explore Bar */}
          <ExploreBar active={active} setActive={setActive}/>

          {/* Button */}
          <div id="taskbar-start-dotted-border">
            <img src={StartIcon} alt="start icon" id="taskbar-start-icon" />
            <div id="taskbar-start-text">Start</div>
          </div>

        </div>
        :
        <div id="taskbar-start" className="windows95-inverted-button" onMouseDown={() => {setActive("start")}}> 
          <img src={StartIcon} alt="start icon" id="taskbar-start-icon" />
          <div id="taskbar-start-text">Start</div>
        </div>
      }

      {/* Taskbar Apps */}
      <section id="taskbar-applications">
        {runningApps.map((item, index) => {
          return(
            <div className={"taskbar-apps-slot " + (active === item.name ? "windows95-border-dark" : "windows95-border-outwards")} key={index} onMouseDown={() => {handleClick(item)}}>
              <div className={`taskbar-apps-slot-icon ${item.name}-icon`} />
              <div className="taskbar-apps-slot-text">{item.display}</div>
            </div>
          );
        })}
      </section>

      {/* Taskbar Time */}
      <div id="taskbar-time" className="windows95-border-light">
        <div className="taskbar-time-text">
          {hour}:{minutes} {indicator}
        </div>
      </div>
    </section>
  );
}