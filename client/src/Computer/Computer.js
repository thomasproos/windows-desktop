// Import CSS
import "./Computer.css";

// Import Components
import Taskbar from "./Taskbar/Taskbar";
import Desktop from "./Desktop/Desktop";

// Import Dependencies
import { useState } from "react";

export default function Computer() {
  const [active, setActive] = useState("none");

  return(
    <section id="computer" className="noselect">
      <Desktop active={active} setActive={setActive}/>
      <Taskbar active={active} setActive={setActive}/>
    </section>
  );
}