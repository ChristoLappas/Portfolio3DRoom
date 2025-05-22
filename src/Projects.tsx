import React from "react";
import "./Projects.css";

const Projects: React.FC = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-container">
      <div className="project-card">
        <h3>3D Portfolio</h3>
        <p>
          <p>
            This project is a unique fusion of{" "}
            <strong>3D design and web development</strong>, created to deliver
            an <strong>immersive and interactive experience</strong>. At its
            core, it's a 3D room modeled in <strong>Blender</strong>, designed
            to reflect elements of my personality, interests, and inspirations.{" "}
            <br />
            <br />
            After modeling, the room was exported in <strong>.glb</strong> (GLTF
            Binary) format — a modern 3D file format optimized for{" "}
            <strong>real-time rendering on the web</strong>. The model is then
            imported into a web application using{" "}
            <strong>React Three Fiber</strong> (R3F) — a powerful React renderer
            for <strong>three.js</strong>, which enables building 3D scenes{" "}
            <strong>declaratively</strong> using React components. <br />
            <br />A key feature of the room is the{" "}
            <strong>computer monitor within the 3D environment</strong>. On this
            virtual screen, I've placed an <strong>iframe</strong> that renders
            a separate <strong>React app</strong> — a{" "}
            <strong>Windows XP-inspired interface</strong>. This embedded
            interface serves as the <strong>central hub</strong> for exploring
            my portfolio: visitors can view my <strong>resume</strong>, browse{" "}
            <strong>projects</strong>, and learn more about my background
            through a nostalgic and engaging UI. <br />
            <br />
            What makes this project special is the{" "}
            <strong>seamless integration</strong> between a 3D scene and a real
            interactive website. Users aren't just looking at my portfolio —{" "}
            <strong>they're exploring it</strong>, as if they're sitting inside
            a virtual space I created. Subtle details throughout the room, such
            as books, decorations, or media references, offer insights into who
            I am and the things that inspire me — making the experience both{" "}
            <strong>personal</strong> and <strong>playful</strong>. <br />
            <br />
            This project highlights my skills in:{" "}
            <strong>3D modeling with Blender</strong>,{" "}
            <strong>web development with React Three Fiber</strong>, and{" "}
            <strong>UI/UX creativity and spatial interaction design</strong>.{" "}
            <br />
            <br />
            It's an ongoing experiment in blending <strong>storytelling</strong>
            , <strong>interactivity</strong>, and <strong>technology</strong> —
            and a representation of how I like to{" "}
            <strong>push the boundaries</strong> of traditional portfolio
            design.
          </p>
        </p>
        <div className="project-links">
          <a href="https://github.com/yourusername/project-one" target="_blank">
            GitHub
          </a>
          <a href="https://project-one-demo.com" target="_blank">
            Live Demo
          </a>
        </div>
      </div>

      <div className="project-card">
        <h3>Dating App</h3>
        <p>
          This project is a{" "}
          <strong>feature-rich, full stack dating application</strong>,
          developed as a way to deeply explore and apply the full spectrum of
          modern web development — from backend architecture to responsive
          frontend design and real-time interactivity.
          <br />
          <br />
          The backend is built with <strong>ASP.NET Core</strong>, leveraging
          the <strong>Identity Framework</strong> for secure user authentication
          and account management. Users can register, set up profiles, define
          preferences, and the app matches them based on customizable criteria.
          <br />
          <br />
          On the frontend, the app uses <strong>Angular</strong>, providing a
          smooth, responsive, and dynamic user interface. State management,
          component-based architecture, and routing are all handled with Angular
          best practices, ensuring a seamless experience across devices.
          <br />
          <br />
          For real-time communication, I integrated <strong>SignalR</strong>,
          allowing users to send and receive <strong>instant messages</strong>{" "}
          when matched. This WebSocket-based feature adds a layer of
          interactivity that brings the dating experience to life. Users can
          also <strong>upload profile pictures</strong>, manage media galleries,
          and browse potential matches in a Tinder-style card layout or
          traditional list view.
          <br />
          <br />
          The application stores all data in a <strong>PostgreSQL</strong>{" "}
          database, ensuring reliable and scalable data handling. The entire
          system is <strong>containerized with Docker</strong>, making it easy
          to develop, test, and deploy consistently across environments. For
          hosting, I used <strong>Fly.io</strong>, which provides a performant
          and scalable deployment solution with minimal DevOps overhead.
          <br />
          <br />
          Additionally, I implemented <strong>GitHub Actions</strong> to handle{" "}
          <strong>CI/CD</strong> pipelines, allowing automated testing and
          deployment with every push to the main branch
          <br />
          <br />
          This project gave me practical, hands-on experience in all areas of{" "}
          <strong>full stack development</strong> — from designing a secure API,
          to implementing real-time client-side features, to orchestrating
          deployment pipelines. It challenged me to think holistically about how
          all parts of a modern web application fit together and communicate.
          <br />
          <br />
          Whether you're a developer, recruiter, or fellow builder, this app is
          a complete showcase of what I can do when working across the entire
          tech stack.
        </p>

        <div className="project-links">
          <a href="https://github.com/yourusername/project-two" target="_blank">
            GitHub
          </a>
          <a href="https://project-two-demo.com" target="_blank">
            Live Demo
          </a>
        </div>
      </div>

      <div className="project-card">
        <h3>Project Three</h3>
        <p>
          For my final project, I created a{" "}
          <strong>React web application</strong> with a{" "}
          <strong>Node.js backend</strong> tailored for a professional in the{" "}
          <strong>heating and sanitation industry</strong>. <br />
          <br />
          The process began with <strong>in-depth discussions</strong> to
          understand the client's ideas, needs, and the specific nature of their
          work. My role was to{" "}
          <strong>
            translate those insights into a practical and user-friendly digital
            experience
          </strong>
          . <br />
          <br />I placed strong emphasis on <strong>UI/UX design</strong>,
          starting with <strong>initial sketches</strong> and progressing to
          more refined <strong>wireframes created in Figma</strong>. These steps
          ensured the design aligned with the client’s vision while offering
          clarity and ease of use for potential customers. <br />
          <br />
          The result was a <strong>clean and intuitive website</strong> that
          clearly communicates the services offered, showcases past projects,
          and includes a <strong>Node.js-powered contact form</strong> for quick
          inquiries or quote requests. <br />
          <br />
          This project demonstrates my ability to work{" "}
          <strong>client-focused</strong>, handle{" "}
          <strong>full-stack development</strong>, and apply{" "}
          <strong>design thinking</strong> to create meaningful digital
          solutions for real-world use cases.
        </p>
        <div className="project-links">
          <a
            href="https://github.com/yourusername/project-three"
            target="_blank"
          >
            GitHub
          </a>
          <a href="https://project-three-demo.com" target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
