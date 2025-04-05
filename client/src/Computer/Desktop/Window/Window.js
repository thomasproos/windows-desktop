// Import CSS
import './Window.css';

// Import Components
import Draggable from 'react-draggable';

// Import Assets
import Close from '../../../Assets/close-window-icon.png';
import Minimize from '../../../Assets/minimize-window-icon.png';
import FullScreen from '../../../Assets/full-window-icon.png';

export default function Window({ application }) {
  return(
    <Draggable>
      <section className="window windows95-border-border-only">
        {/* Header */}
        <div id="window-header">
          <div id="window-header-textbox">
            <div className={`window-header-icon ${application.name}-icon`} />
            <div className="window-header-name">{application.display}</div>
          </div>

          {/* Window Buttons */}
          <div id="window-button-container">
            <img src={Minimize} alt="" className="window-button windows95-inverted-button-window" />
            <img src={FullScreen} alt="" className="window-button windows95-inverted-button-window" />
            <img src={Close} alt="" className="window-button windows95-inverted-button-window" />
          </div>
        </div>
        
        {/* Content */}
        <div className="window-content">
          
        </div>
      </section>
    </Draggable>
  );
}