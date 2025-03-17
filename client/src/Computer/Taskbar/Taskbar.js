// Import CSS
import "./Taskbar.css";

// Import Assets
import StartIcon from '../../Assets/start-icon.png';

export default function Taskbar({ active, setActive }) {
  return(
    <section id="taskbar" className="windows95-border-no-black-white-top">
      {/* Taskbar */}
      {active === "start" ?
        <div id="taskbar-start" className="windows95-inverted-button-active">
          <div id="taskbar-start-explore">

          </div>
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
      <div id="taskbar-time">

      </div>
    </section>
  );
}