import React from "react";
import resume1 from "./assets/Christos_Lappas_Resume-1.png";
import resume2 from "./assets/Christos_Lappas_Resume-2.png";
import documents from "./assets/documents.png"
import pdf from "./assets/Christos_Lappas_Resume.pdf"

const Resume: React.FC = () => (
  <div className="about-content">
    <h2>Resume</h2>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <img src={documents} alt="documents" style={{width: '30px'}}/>
      <a
        href={pdf}
        download
        style={{ fontSize: "1.1rem" }}
      >
        Click here to download my resume
      </a>
    </div>
    <img
      src={resume1}
      alt="Christos Lappas resume"
      className="resume"
      style={{ width: "60%" }}
    />
    <img
      src={resume2}
      alt="Christos Lappas resume"
      className="resume"
      style={{ width: "60%" }}
    />
  </div>
);

export default Resume;
