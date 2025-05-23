import React, { useEffect, useState } from "react";
import "./StartBar.css";

const StartBar: React.FC = () => {  
  const [showMenu, setShowMenu] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      const formattedDate = now.toLocaleDateString('en-GB').replace(/\/\d{4}$/, (match) => match.slice(0, 3) + now.getFullYear().toString().slice(-2));

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return(
    <div>
    <div className="flex-column" id="menu" style={{display: showMenu ? 'block' : 'none'}}>
      <div className="flex" id="avatar">
        <img alt="" src="images/user.jpg" />
        <p>Christo</p>
      </div>

      <div className="flex" id="menuColumns">
        <div className="flex-column" id="menuFirstColumn">
          <label className="flex" htmlFor="internetMaximize">
            <img alt="" src="images/explorer.png" />
            Internet
          </label>
          <div className="flex">
            <img alt="" src="images/email.png" />
            <p>E-mail</p>
          </div>
          <hr />
          <div className="flex">
            <img alt="" src="images/msn.png" />
            <p>MSN</p>
          </div>
          <div className="flex">
            <img alt="" src="images/winPlayer.png" />
            <p>Windows Media Player</p>
          </div>
          <div className="flex">
            <img alt="" src="images/messenger.png" />
            <p>Windows Messenger</p>
          </div>
          <label className="flex" htmlFor="calculatorMaximize">
            <img alt="" src="images/calculator.png" />
            Calculator
          </label>
          <label className="flex" htmlFor="notepadMaximize">
            <img alt="" src="images/notepad.png" />
            Notepad
          </label>
          <hr />
          <div className="flex" id="allPrograms">
            <p>All Programs</p>
            <img alt="" src="images/run.ico" />
          </div>
        </div>

        <div className="flex-column" id="menuLastColumn">
          <div className="flex">
            <img alt="" src="images/documents.png" />
            <p>My Documents</p>
          </div>
          <div className="flex">
            <img alt="" src="images/pictures.png" />
            <p>My Pictures</p>
          </div>
          <div className="flex">
            <img alt="" src="images/musics.png" />
            <p>My Music</p>
          </div>
          <div className="flex">
            <img alt="" src="images/computer.png" />
            <p>My Computer</p>
          </div>
          <hr />
          <a
            className="flex"
            href="https://github.com/ChristoLappas"
            target="_blank"
          >
            <img alt="" src="images/github-logo.png" />
            <p>GitHub</p>
          </a>
          <a
            className="flex"
            href="https://www.linkedin.com/in/christos-lappas"
            target="_blank"
          >
            <img alt="" src="images/linkedin.png" />
            <p>Linkedin</p>
          </a>
          <hr />
          <div className="flex">
            <img alt="" src="images/help.png" />
            <p>Help</p>
          </div>
          <div className="flex">
            <img alt="" src="images/search.png" />
            <p>Search</p>
          </div>
          <div className="flex">
            <img alt="" src="images/run.png" />
            <p>Run...</p>
          </div>
        </div>
      </div>

      <div className="flex" id="menuSystem">
        <div className="flex">
          <img alt="" src="images/logoff.png" />
          <p>Log OFF</p>
          <p></p>
        </div>

        <div className="flex">
          <img alt="" src="images/turnoff.png" />
          <p>Turn OFF Computer</p>
        </div>
      </div>
    </div>
    <div className="start-bar">
      <img src="/images/start.png" alt="Start" className="start-button" onClick={() => setShowMenu(prev => !prev)}/>
      <section className="flex" id="notification">
                <img alt="" src="images/drivers.png" title="Drivers" />
                <img alt="" src="images/sound.png" title="Volume" />
                <p title={date}>{time}</p>
      </section>
    </div>
  </div>
  )
};

export default StartBar;
