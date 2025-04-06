// Import CSS
import "./Desktop.css";

// Import Components
import DesktopApp from "./DesktopApp/DesktopApp";
import Window from "./Window/Window";

// Import Dependencies
import { useRef, useState } from "react";

export default function Desktop({ active, setActive, runningApps, setRunningApps, applicationList }) {
  const [activeApp, setActiveApp] = useState([null,null]);
  const desktopRef = useRef(null);

  // Handle clear actives
  const handleClearActives = () => {
    setActiveApp([null,null]);
    setActive("none");
  }

  return(
    <section ref={desktopRef} id="desktop" onMouseDown={handleClearActives}>
      <section id="desktop-application-area">
        {/* Applications */}
        {applicationList.map((application, index) => {
          return(
            <DesktopApp setActive={setActive} text={application.display} name={application.name} id={application.position} 
              activeApp={activeApp} setActiveApp={setActiveApp} setRunningApps={setRunningApps} runningApps={runningApps} key={index}/>
          );
        })}

        {/* Windows */}
        {runningApps.map((application, index) => {
          return(
            <Window application={application} key={index} setRunningApps={setRunningApps} runningApps={runningApps} setActive={setActive} 
              active={active} desktopRef={desktopRef}/>
          );
        })}
      </section>

    </section>
  );
}