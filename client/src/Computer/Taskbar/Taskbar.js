// Import CSS
import "./Taskbar.css";

// Import Components
import ExploreBar from "./ExploreBar/ExploreBar";

// Import Assets
import StartIcon from '../../Assets/start-icon.png';

export default function Taskbar({ active, setActive }) {
  // Get Date information
  const date = new Date(); 
  const hour = date.getHours();
  const minutes = date.getMinutes();

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

      </section>

      {/* Taskbar Time */}
      <div id="taskbar-time" className="windows95-border-light">
        {hour >= 12 && hour < 24 ?
          <div className="taskbar-time-text">{hour - 12}:{minutes} PM</div>
          :
          <div className="taskbar-time-text">{hour}:{minutes} AM</div>
        }
      </div>
    </section>
  );
}