// Import CSS
import "./Desktop.css";

// Import Assets
import InternetExplore from '../../Assets/internet-icon.png';

// Import Components
import DesktopApp from "./DesktopApp/DesktopApp";
import Window from "./Window/Window";

// Import Dependencies
import { useRef, useState } from "react";

export default function Desktop({ active, setActive, runningApps, setRunningApps }) {
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
        <DesktopApp active={active} setActive={setActive} text="The Internet" name="internet" image={InternetExplore} id={[0,0]} 
          activeApp={activeApp} setActiveApp={setActiveApp} setRunningApps={setRunningApps} runningApps={runningApps}/>

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