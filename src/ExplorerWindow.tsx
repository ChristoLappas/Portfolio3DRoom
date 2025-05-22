import React from 'react';
import "xp.css/dist/XP.css";

interface ExplorerWindowProps {
  onClose: () => void;
}

const ExplorerWindow: React.FC<ExplorerWindowProps> = ({ onClose }) => {
  return (
    <div className="window" style={{ width: 400, position: 'absolute', top: 100, left: 100, zIndex: 10 }}>
      <div className="title-bar">
        <div className="title-bar-text">About Me</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onClose} />   
          <button aria-label="Maximize" onClick={onClose} />         
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