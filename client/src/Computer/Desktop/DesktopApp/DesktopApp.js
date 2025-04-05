// Import CSS
import "./DesktopApp.css";

export default function DesktopApp({ active, setActive, text, name, image, id, activeApp, setActiveApp, runningApps, setRunningApps }) {
  // Handle app click
  const handleAppClick = (event) => {
    event.stopPropagation();
    setActiveApp(id);
  }

  // Handle Opening the App
  const handleOpenApp = () => {
    setActive("internet");

    // Check if the app is already running
    if (!runningApps.includes(text)) {
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
      <img src={image} alt="Application Icon" className="desktop-app-icon" />
      <div className="desktop-app-text">{text}</div>
    </div>
  );
}