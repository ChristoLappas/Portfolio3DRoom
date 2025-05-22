import React, { useState } from 'react';
import "xp.css/dist/XP.css";

interface ExplorerWindowProps {
  onClose: () => void;
}

const ExplorerWindow: React.FC<ExplorerWindowProps> = ({ onClose }) => {
  const [maximized, setMaximized] = useState(false);

  const windowStyle = maximized
    ? {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
      }
    : {
        width: 400,
        position: 'absolute' as const,
        top: 100,
        left: 100,
        zIndex: 10,
      };

  return (
    <div className="window" style={windowStyle}>
      <div className="title-bar">
        <div className="title-bar-text">About Me</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => {}} />   
          <button aria-label="Maximize" onClick={() => setMaximized(m => !m)} />         
          <button aria-label="Close" onClick={onClose} />       
        </div>
      </div>
      <div className="window-body">
        <h3>Hello!</h3>
        <p>This is a placeholder for information about myself.</p>
        <p>You can update this section with your own details.</p>
      </div>
    </div>
  );
};

export default ExplorerWindow; 