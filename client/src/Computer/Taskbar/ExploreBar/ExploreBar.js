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

// Import Components
import ExploreButton from './ExploreButton/ExploreButton';

// Import Dependencies
import { useState } from "react";

export default function ExploreBar({ active, setActive }) {
  const [navigation, setNavigation] = useState("none");

  return(
    <section id="explore-bar" className="windows95-border-border-only">
      {/* Art Image */}
      <div id="explore-bar-icon-box">
        <img src={Windows95} alt="windows-95-icon" id="explore-bar-icon" />
      </div>

      {/* Navigation */}
      <div id="explore-bar-buttons">

        {/* Programs */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<><span>P</span>rograms</>} image={Programs} arrow={true} id="programs" size="large"/>

        {/* Documents */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<><span>D</span>ocuments</>} image={Documents} arrow={true} id="documents" size="large"/>

        {/* Settings */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<><span>S</span>ettings</>} image={Settings} arrow={true} id="settings" size="large"/>

        {/* Find */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<><span>F</span>ind</>} image={Search} arrow={true} id="find" size="large"/>

        {/* Help */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<><span>H</span>elp</>} image={Help} arrow={false} id="help" size="large"/>

        {/* Run */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<><span>R</span>un...</>} image={Run} arrow={false} id="run" size="large"/>

        {/* Divider */}
        <div id="search-bar-divider" />

        {/* Shut Down */}
        <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<>Sh<span>u</span>t Down...</>} image={ShutDown} arrow={false} id="shutdown" size="large"/>
        
      </div>
    </section>
  );
}