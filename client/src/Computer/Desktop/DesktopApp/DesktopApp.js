// Import CSS
import "./DesktopApp.css";

export default function DesktopApp({ setActive, text, name, id, activeApp, setActiveApp, runningApps, setRunningApps }) {
  // Handle app click
  const handleAppClick = (event) => {
    event.stopPropagation();
    setActiveApp(id);
  }

  // Handle Opening the App
  const handleOpenApp = () => {
    setActive(name);

    // Check if the app is already running
    let running = false;
    runningApps.forEach((app) => {
      if (app.name === name) {
        running = true;
      }
    });

    // If not running add the app to the list
    if (!running) {
      const appList = runningApps;

      // Add object to the list
      appList.unshift({
        display: text,
        name: name,
        id: id
      });

      setRunningApps(appList);
    }
  };
  
  return(
    <div className={"desktop-app "  + (id[0] === activeApp[0] && id[1] === activeApp[1] ? "desktop-app-active" : "")} onMouseDown={handleAppClick}
      onDoubleClick={handleOpenApp}>
      <div className={`desktop-app-icon desktop-app-icon-${name}`} />
      <div className="desktop-app-text">{text}</div>
    </div>
  );
}