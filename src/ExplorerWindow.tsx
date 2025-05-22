import React, { useState, useRef } from 'react';
import "xp.css/dist/XP.css";
import About from './About';
import Resume from './Resume';

interface ExplorerWindowProps {
  onClose: () => void;
}

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
];

const ExplorerWindow: React.FC<ExplorerWindowProps> = ({ onClose }) => {
  const [maximized, setMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 300, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [selectedTab, setSelectedTab] = useState('about');
  const dragOffset = useRef({ x: 0, y: 0 });

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
        top: position.y,
        left: position.x,
        zIndex: 10,
      };

  const onMouseDown = (e: React.MouseEvent) => {
    if (maximized) return;
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = 'none';
  };

  React.useEffect(() => {
    if (!dragging) return;
    const onMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const onMouseUp = () => {
      setDragging(false);
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);

  return (
    <div className="window" style={windowStyle}>
      <div className="title-bar" onMouseDown={onMouseDown} style={{ cursor: maximized ? 'default' : 'move'}}>
        <div className="title-bar-text">Portfolio - Christo Lappas</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onClose} />   
          <button aria-label="Maximize" onClick={() => setMaximized(m => !m)} />         
          <button aria-label="Close" onClick={onClose} />       
        </div>
      </div>
      <div className="window-body" style={{ height: maximized ? '100vh' : '50vh', overflow: maximized ? 'hidden' : 'auto' }}>
        <menu role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.id}
              aria-selected={selectedTab === tab.id}
              aria-controls={tab.id}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </menu>
        <article role="tabpanel" id="about" hidden={selectedTab !== 'about'} className={maximized ? 'maximized-content' : ''}>
          <About />
        </article>
        <article role="tabpanel" id="projects" hidden={selectedTab !== 'projects'} className={maximized ? 'maximized-content' : ''}>
          
        </article>
        <article role="tabpanel" id="resume" hidden={selectedTab !== 'resume'} className={maximized ? 'maximized-content' : ''}>
          <Resume />
        </article>
      </div>
    </div>
  );
};

export default ExplorerWindow; 