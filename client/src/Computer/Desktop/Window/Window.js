// Import CSS
import './Window.css';

// Import Components
import Draggable from 'react-draggable';

export default function Window({ application }) {
  return(
    <Draggable>
      <section className="window">
        {/* Header */}
        <div id="window-header">
          <div className="window-header-icon" />
          <div className="window-header-name">{application.display}</div>
        </div>
        
        {/* Content */}
        <div>
          {application.display}{application.display}<br></br>
          {application.display}{application.display}<br></br>
          {application.display}{application.display}<br></br>
          {application.display}{application.display}<br></br>
          {application.display}{application.display}<br></br>
        </div>
      </section>
    </Draggable>
  );
}