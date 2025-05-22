import { useState } from 'react'
import './App.css'
import "xp.css/dist/XP.css";
import Desktop from './Desktop';
import ExplorerWindow from './ExplorerWindow';
import PowerPointWindow from './PowerPointWindow';

function App() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showPowerPoint, setShowPowerPoint] = useState(false);

  return (
    <>
      <Desktop 
        onExplorerClick={() => setShowExplorer(true)} 
        onPowerPointClick={() => setShowPowerPoint(true)}
      />
      {showExplorer && (
        <ExplorerWindow onClose={() => setShowExplorer(false)} />
      )}
      {showPowerPoint && (
        <PowerPointWindow onClose={() => setShowPowerPoint(false)} />
      )}
    </>
  )
}

export default App
