// Import CSS
import "./ExploreButton.css";

// Import Assets
import Notepad from '../../../../Assets/notepad-icon.png';
import Calculator from '../../../../Assets/calculator-icon.png';

export default function ExploreButton({ navigation, setNavigation, text, image, arrow, id, size }) {
  // Handle explore navigation click
  const onButtonClick = () => {
    if (id === "programs") {
      setNavigation("programs");
    } 
  }

  return(
    <section className={"" + size === "large" ? "explore-button-large" : "explore-button-small"} onMouseDown={onButtonClick}>
      <img src={image} alt="Explore Icon" className={"" + size === "large" ? "explore-button-icon-large" : "explore-button-icon-small"}/>
      <div className={"" + size === "large" ? "explore-button-text-large" : "explore-button-text-small"}>    
        {text}
      </div>
      {arrow === true ?
        <div className="explore-button-arrow"/>
        :
        <></>
      }

      {/* Navigation Panel */}
      {navigation === "programs" && id === "programs" ?
        <div id="explore-bar-program-navigation" className="windows95-border-border-only">
          <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<>Notepad</>} image={Notepad} arrow={false} id="notepad" size="small"/>
          <ExploreButton navigation={navigation} setNavigation={setNavigation} text={<>Calculator</>} image={Calculator} arrow={false} id="calculator" size="small"/>
        </div>
        :
        <></>
      }
    </section>
  );
}