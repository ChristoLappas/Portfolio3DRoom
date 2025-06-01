import React from "react";
import christoImg from "./assets/Christo.png";
import "./About.css";

const About: React.FC = () => (
  <div className="about-content">
    <h2>About This Website</h2>
    <img src={christoImg} alt="Christos Lappas" className="about-photo" />
    <p id="about-text">
      Welcome to my portfolio website! <br />
      <br />
      My name is Christo Lappas and I'm an Applied Computer Science student from
      Hogeschool PXL, with a passion for full-stack development and a strong
      interest in design. I love building creative, immersive experiences that
      blend technology and storytelling. <br />
      <br />
      This 3D portfolio was created as part of the I-Talent program, where we
      were challenged to develop three personal projects showcasing our skills.
      The first project is a professional website built for a heating and
      plumbing business, featuring detailed information about the services
      offered, past projects, and a contact form. You can explore this website
      by clicking on the Internet Explorer icon on the desktop. The second
      project is this interactive 3D room itself, which includes a nostalgic
      Windows XP-style interface. Here, you can discover more about me, my
      projects, and my resume — all in one immersive experience. Finally, all of
      this is hosted on a Raspberry Pi that has been transformed into a fully
      functioning web server, making this entire setup not only creative but
      also technically self-sufficient.
      <br />
      <br />
      To bring this site to life, I created a 3D room using Blender, complete
      with a computer screen that displays this interactive website through an
      iframe. You can explore and use the site just like a real desktop — but
      inside the 3D world. <br />
      <br />
      This site is designed to showcase my projects, resume, and skills in a fun
      and interactive Windows XP-inspired environment. Explore the different
      windows and tabs to learn more about my work and experience. <br />
      <br />
      As you look around the room, you’ll discover various items that have
      greatly inspired me or had a significant impact on me at different points
      in my life. Each object represents a part of my journey, offering insight
      into what has shaped my creativity, interests, and perspective. Take your
      time, explore, click around — and get to know the person behind the code.
    </p>
  </div>
);

export default About;
