import React from 'react';
import './Desktop.css';
import explorerIcon from './assets/explorer.png';

interface DesktopProps {
  onExplorerClick: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ onExplorerClick }) => {
  return (
    <div className="xp-desktop">
      <div className="desktop-icon" onClick={onExplorerClick} tabIndex={0} role="button" aria-label="Open Explorer">
        <img src={explorerIcon} alt="Explorer" width={48} height={48} />
        <div className="icon-label">Explorer</div>
      </div>
    </div>
  );
};

export default Desktop; 