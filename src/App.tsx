import { useState } from 'react'
import './App.css'
import "xp.css/dist/XP.css";
import Desktop from './Desktop';
import ExplorerWindow from './ExplorerWindow';

function App() {
  const [showExplorer, setShowExplorer] = useState(false);

  return (
    <>
      <Desktop onExplorerClick={() => setShowExplorer(true)} />
      {showExplorer && (
        <ExplorerWindow onClose={() => setShowExplorer(false)} />
      )}
    </>
  )
}

export default App
