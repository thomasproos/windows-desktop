// Import CSS
import './Window.css';

// Import Assets
import Close from '../../../Assets/close-window-icon.png';
import Minimize from '../../../Assets/minimize-window-icon.png';
import FullScreen from '../../../Assets/full-window-icon.png';

// Import Dependencies
import { useEffect, useRef, useState, useCallback } from 'react';

export default function Window({ application, runningApps, setRunningApps, active, setActive, desktopRef }) {
  const [fullscreen, setFullScreen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  
  // Window Dragging Logic
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef(null);
  const dragStart = useRef({ x: 0, y: 0 });

  // Function to handle when the drag starts
  const handleMouseDown = (event) => {
    setIsDragging(true);

    // Store the initial mouse offset relative to the window's top-left corner
    if (windowRef.current) {
      dragStart.current = {
        x: event.clientX - windowRef.current.offsetLeft, // Distance from mouse to window's left
        y: event.clientY - windowRef.current.offsetTop,  // Distance from mouse to window's top
      };
    }
  };

  // Function to handle the drag movement
  const handleMouseMove = useCallback((event) => {
    if (!isDragging || !windowRef.current || fullscreen) return;

    const newX = event.clientX - dragStart.current.x;
    const newY = event.clientY - dragStart.current.y;

    // Update the window's position directly using the ref
    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  }, [fullscreen, isDragging]);

  // Function to stop the drag
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Set the event listeners
  useEffect(() => {
    if (desktopRef.current) {
      desktopRef.current.addEventListener('mousemove', handleMouseMove);
      desktopRef.current.addEventListener('mouseup', () => {
        setIsDragging(false);
        desktopRef.current.removeEventListener('mousemove', handleMouseMove);
      });
    }
  }, [desktopRef, handleMouseMove]);

  // Handle fullscreening
  const handleFullScreenWindow = () => {
    if (fullscreen) {
      // Update the window's position directly using the ref
      windowRef.current.style.left = `${(window.innerWidth - (windowRef.current.clientWidth / 1.35))}px`;
      windowRef.current.style.top = `${(window.innerHeight - (windowRef.current.clientHeight / 1.25))}px`;
    } else {
      windowRef.current.style.left = '5px';
      windowRef.current.style.top = '5px';
    }

    setFullScreen(!fullscreen);
  };

  // Handle closing a window
  const handleCloseWindow = () => {
    const updatedAppsList = runningApps.filter((app) => app.name !== application.name);
    setRunningApps(updatedAppsList);
  };

  // Handle minimizing a window
  const handleMinimizeWindow = () => {    
    setActive("none");
    setMinimized(true);
  };

  // Handle active click
  const handleWindowClick = (event) => {
    event.stopPropagation();
    if (active !== application.name) {
      setActive(application.name);
    }
  };

  // Check if app is active again
  useEffect(() => {
    if (active === application.name && minimized) {
      setMinimized(false);
    }
  }, [active, setMinimized, minimized, application]);

  return(
    <section ref={windowRef} className={"window windows95-border-border-only " + 
      (fullscreen ? "window-fullscreen " : "window-smallscreen ") + 
      (minimized ? "window-minimize " : "")} onMouseDown={handleWindowClick} onMouseMove={isDragging ? handleMouseMove : null}>

      {/* Header */}
      <div className={"window-header " + (active !== application.name ? "window-inactive" : "")} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <div id="window-header-textbox">
          <div className={`window-header-icon ${application.name}-icon`} />
          <div className="window-header-name">{application.display}</div>
        </div>

        {/* Window Buttons */}
        <div id="window-button-container">
          <img src={Minimize} alt="" className="window-button windows95-inverted-button-window" onMouseDown={(event) => event.stopPropagation()} onMouseUp={handleMinimizeWindow}/>
          <img src={FullScreen} alt="" className="window-button windows95-inverted-button-window" onMouseDown={(event) => event.stopPropagation()} onMouseUp={handleFullScreenWindow}/>
          <img src={Close} alt="" className="window-button windows95-inverted-button-window" onMouseDown={(event) => event.stopPropagation()} onMouseUp={handleCloseWindow}/>
        </div>
      </div>
      
      {/* Content */}
      <div className="window-content">
        
      </div>
    </section>
  );
}