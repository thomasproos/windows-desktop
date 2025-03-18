// Import CSS
import "./Desktop.css";

// Import Assets
import InternetExplore from '../../Assets/internet-explore-icon.png';

// Import Components
import DesktopApp from "./DesktopApp/DesktopApp";

// Import Dependencies
import { useState } from "react";

export default function Desktop({ active, setActive, runningApps, setRunningApps }) {
  const [activeApp, setActiveApp] = useState([null,null]);

  // Handle clear actives
  const handleClearActives = () => {
    setActiveApp([null,null]);
    setActive("none");
  }

  return(
    <section id="desktop" onMouseDown={handleClearActives}>
      {/* Applications */}
      <section id="desktop-application-area">
        <DesktopApp active={active} setActive={setActive} text="The Internet" image={InternetExplore} id={[0,0]} 
          activeApp={activeApp} setActiveApp={setActiveApp} setRunningApps={setRunningApps} runningApps={runningApps}/>
      </section>

      {/* Windows */}
    </section>
  );
}