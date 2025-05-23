import React from 'react';
import './Desktop.css';
import explorerIcon from './assets/explorer.png';
import powerpointIcon from './assets/powerpoint.png';
import infoIcon from './assets/info.png'

interface DesktopProps {
  onInfoClick: () => void;
  onPowerPointClick: () => void;
  onExplorerClick: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ onExplorerClick, onInfoClick, onPowerPointClick,  }) => {
  return (
    <div className="xp-desktop">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>     
        <div className="desktop-icon" onClick={onExplorerClick} tabIndex={0} role="button" aria-label="Open Explorer">
          <img src={explorerIcon} alt="Explorer" width={48} height={48} />
          <div className="icon-label">Explorer</div>
        </div>   
        <div className="desktop-icon" onClick={onInfoClick} tabIndex={0} role="button" aria-label="Open Info">
          <img src={infoIcon} alt="Info" width={48} height={48} />
          <div className="icon-label">Info</div>
        </div>
        <div className="desktop-icon" onClick={onPowerPointClick} tabIndex={0} role="button" aria-label="Open PowerPoint">
          <img src={powerpointIcon} alt="PowerPoint" width={48} height={48} />
          <div className="icon-label">PowerPoint</div>
        </div>        
      </div>
    </div>
  );
};

export default Desktop; 