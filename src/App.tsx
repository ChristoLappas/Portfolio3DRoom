import { useState } from "react";
import "./App.css";
import "xp.css/dist/XP.css";
import Desktop from "./Desktop";
import ExplorerWindow from "./ExplorerWindow";
import PowerPointWindow from "./PowerPointWindow";
import StartBar from "./StartBar";
import InfoWindow from "./InfoWindow";

function App() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showPowerPoint, setShowPowerPoint] = useState(false);

  return (
    <>
      <Desktop
        onExplorerClick={() => setShowExplorer(true)}
        onInfoClick={() => setShowInfo(true)}
        onPowerPointClick={() => setShowPowerPoint(true)}
      />
      {showExplorer && (
        <ExplorerWindow onClose={() => setShowExplorer(false)}/>
      )}
      {showInfo && (
        <InfoWindow onClose={() => setShowInfo(false)}/>
      )}
      {showPowerPoint && (
        <PowerPointWindow onClose={() => setShowPowerPoint(false)} />
      )}
      <StartBar/>      
    </>
  );
}

export default App;
