// Import CSS
import "./ExploreBar.css";

// Import Assets
import Windows95 from '../../../Assets/windows-95-icon.png';
import Settings from '../../../Assets/settings-icon.png';
import Search from '../../../Assets/search-icon.png';
import Programs from '../../../Assets/programs-icon.png';
import Run from '../../../Assets/run-icon.png';
import Help from '../../../Assets/help-icon.png';
import Documents from '../../../Assets/documents-icon.png';
import ShutDown from '../../../Assets/shut-down-icon.png';

export default function ExploreBar({ active, setActive }) {
  // Handle explore navigation click
  const onButtonClick = (event) => {
    event.stopPropagation();
    console.log("hi")
  }

  return(
    <section id="explore-bar" className="windows95-border-border-only">
      {/* Art Image */}
      <div id="explore-bar-icon-box">
        <img src={Windows95} alt="windows-95-icon" id="explore-bar-icon" />
      </div>

      {/* Navigation */}
      <div id="explore-bar-buttons">

        {/* Programs */}
        <div className="explore-bar-button" id="explore-button-programs" onMouseDown={(event) => {onButtonClick(event)}}>
          <img src={Programs} alt="Programs Icon" className="explore-bar-button-icon explore-bar-button-icon-smaller"/>
          <div className="explore-bar-button-text">
            <span>P</span>rograms
          </div>
          <div className="search-bar-button-arrow"/>
        </div>

        {/* Documents */}
        <div className="explore-bar-button" id="explore-button-documents" onClick={(event) => {onButtonClick(event)}}>
          <img src={Documents} alt="Documents Icon" className="explore-bar-button-icon"/>
          <div className="explore-bar-button-text">
            <span>D</span>ocuments
          </div>
          <div className="search-bar-button-arrow"/>
        </div>

        {/* Settings */}
        <div className="explore-bar-button" id="explore-button-settings" onClick={(event) => {onButtonClick(event)}}>
          <img src={Settings} alt="Settings Icon" className="explore-bar-button-icon"/>
          <div className="explore-bar-button-text">
            <span>S</span>ettings
          </div>
          <div className="search-bar-button-arrow"/>
        </div>

        {/* Find */}
        <div className="explore-bar-button" id="explore-button-find" onClick={(event) => {onButtonClick(event)}}>
          <img src={Search} alt="Find Icon" className="explore-bar-button-icon explore-bar-button-icon-smaller"/>
          <div className="explore-bar-button-text">
            <span>F</span>ind
          </div>
          <div className="search-bar-button-arrow"/>
        </div>

        {/* Help */}
        <div className="explore-bar-button" id="explore-button-help" onClick={(event) => {onButtonClick(event)}}>
          <img src={Help} alt="Help Icon" className="explore-bar-button-icon"/>
          <div className="explore-bar-button-text">
            <span>H</span>elp
          </div>
        </div>

        {/* Run */}
        <div className="explore-bar-button" id="explore-button-run" onClick={(event) => {onButtonClick(event)}}>
          <img src={Run} alt="Run Icon" className="explore-bar-button-icon"/>
          <div className="explore-bar-button-text">
            <span>R</span>un...
          </div>
        </div>

        {/* Divider */}
        <div id="search-bar-divider" />

        {/* Shut Down */}
        <div className="explore-bar-button" id="explore-button-shutdown" onClick={(event) => {onButtonClick(event)}}>
          <img src={ShutDown} alt="ShutDown Icon" className="explore-bar-button-icon"/>
          <div className="explore-bar-button-text">
            Sh<span>u</span>t Down...
          </div>
        </div>
      </div>
    </section>
  );
}