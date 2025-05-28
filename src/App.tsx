import React from "react";
import "./style.css";

const App: React.FC = () => {
  return (
    <>
      <div className="intro">
        <div className="overlay-slide"></div>
        <h1 className="logoheader">
          <span className="logo">Hello</span>
          <span className="logo">World!</span>
        </h1>
      </div>

      <main className="content">
        <section className="about">
          <h2>About Me</h2>
          <p className="hover-effect">
            Aspiring IT specialist, mastering code today to shape the technology
            of tomorrow
          </p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skill-icons">
            <img src="assets/skill1.png" alt="Skill 1" className="skill-icon" />
            <img src="assets/skill2.png" alt="Skill 2" className="skill-icon" />
            <img src="assets/skill3.png" alt="Skill 3" className="skill-icon" />
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-gallery">
            <img
              src="assets/project1.jpg"
              alt="Project 1"
              data-text="Description 1"
              className="project-image"
            />
            <img
              src="assets/project2.jpg"
              alt="Project 2"
              data-text="Description 2"
              className="project-image"
            />
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit" className="animated-button">
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default App;
