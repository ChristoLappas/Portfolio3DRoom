import React, { useState, useRef } from 'react';
import "xp.css/dist/XP.css";


interface ExplorerWindowProps {
  onClose: () => void;
}

const ExplorerWindow: React.FC<ExplorerWindowProps> = ({ onClose }) => {
  const [maximized, setMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 480, y: 160 });
  const [dragging, setDragging] = useState(false);
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
        <div className="title-bar-text">Internet Explorer</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onClose} />   
          <button aria-label="Maximize" onClick={() => setMaximized(m => !m)} />         
          <button aria-label="Close" onClick={onClose} />       
        </div>
      </div>
      <div className="window-body" style={{ height: maximized ? '100vh' : '50vh', overflow: maximized ? 'hidden' : 'auto' }}>
        <div style={{width: '90%', margin: '10px', backgroundColor: 'white', padding: '10px', fontSize: maximized ? '1.3rem' : ''}}>
          <p>https://broux-verwarming-sanitair.be</p>
        </div>
        <iframe src="https://broux-verwarming-sanitair.be" style={{height: maximized ? '85vh' : '50vh'}}></iframe>
      </div>
    </div>
  );
};

export default ExplorerWindow; 