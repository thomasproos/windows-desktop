// Import CSS
import "./Computer.css";

// Import Components
import Taskbar from "./Taskbar/Taskbar";
import Desktop from "./Desktop/Desktop";

// Import Dependencies
import { useState } from "react";

export default function Computer() {
  const [active, setActive] = useState("none");
  // For when you can re-arrange the positioning of apps on the desktop
  const [apps, setApps] = useState([]); 
  const [runningApps, setRunningApps] = useState([]);

  return(
    <section id="computer" className="noselect">
      <Desktop active={active} setActive={setActive} runningApps={runningApps} setRunningApps={setRunningApps}/>
      <Taskbar active={active} setActive={setActive} runningApps={runningApps} setRunningApps={setRunningApps}/>
    </section>
  );
}