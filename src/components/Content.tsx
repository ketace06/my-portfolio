const ContentApp = () => {
  return (
    <main className="content">
      <section id="about">
        <h2>About Me</h2>
        <p className="hover-effect">
          Aspiring IT specialist, mastering code today to shape the technology
          of tomorrow
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-icons">
              <div className="skill-icon" title="HTML5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt="HTML5"
                />
              </div>
              <div className="skill-icon" title="CSS3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="CSS3"
                />
              </div>
              <div className="skill-icon" title="JavaScript">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript"
                />
              </div>
              <div className="skill-icon" title="TypeScript">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  alt="TypeScript"
                />
              </div>
              <div className="skill-icon" title="React">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                />
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-icons">
              <div className="skill-icon" title="Node.js">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="Node.js"
                />
              </div>
              <div className="skill-icon" title="npm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
                  alt="npm"
                />
              </div>
              <div className="skill-icon" title="pnpm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pnpm-logo.svg"
                  alt="pnpm"
                />
              </div>
              <div className="skill-icon" title="Vite">
                <img src="https://vitejs.dev/logo.svg" alt="Vite" />
              </div>
              <div className="skill-icon" title="rsbuild">
                <img
                  src="https://raw.githubusercontent.com/rsbuild/rsbuild/main/logo.svg"
                  alt="rsbuild"
                />
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Game Engines</h3>
            <div className="skill-icons">
              <div className="skill-icon" title="Godot Engine">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/Godot_icon.svg"
                  alt="Godot Engine"
                />
              </div>
              <div className="skill-icon" title="Unreal Engine 5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Unreal_Engine_logo.svg"
                  alt="Unreal Engine 5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Biggest projects</h2>
        <div className="project-gallery">
          <img
            src="https://via.placeholder.com/300x200?text=Project+1"
            alt="Project 1"
            data-text="Site web e-commerce réalisé avec React et Node.js"
            className="project-image"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Project+2"
            alt="Project 2"
            data-text="Application mobile développée en React Native"
            className="project-image"
          />
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="off"
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="off"
            />
          </label>
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
  );
};

export default ContentApp;
