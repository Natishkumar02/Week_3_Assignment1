import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Natish Kumar</h1>
        <p>
          Computer Software and Database Development Student at Loyalist College,
          Toronto
        </p>
      </header>
      <nav className="nav">
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#skills" className="nav-link">Skills</a>
      </nav>
      <div className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Hi, I'm Natish from India. I completed my graduation in Computer Science
            and currently studying Computer Software and Database Development at
            Loyalist College, Toronto. I have a passion for coding and love to learn
            new technologies. In my free time, I enjoy working on personal projects
            and contributing to open-source communities. My goal is to become a
            full-stack developer and work on innovative projects that make a
            difference.
          </p>
        </section>
        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li className="skills-item">HTML & CSS</li>
            <li className="skills-item">JavaScript</li>
            <li className="skills-item">React</li>
            <li className="skills-item">GoLang</li>
            <li className="skills-item">SQL</li>
            <li className="skills-item">Git & GitHub</li>
          </ul>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project">
              <h3>Project 1</h3>
              <p>
                My project 1 is to install GoLang, operate GoLang, and code simple Go
                code.
              </p>
              <a href="https://github.com/Natishkumar02/Natish_Kumar_CSDD1008">
                View on GitHub
              </a>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>
                My project 2 is a Go application that counts the number of vowels in a
                given string. It includes unit tests to ensure the accuracy of the vowel
                counting functionality.
              </p>
              <a href="https://github.com/Natishkumar02/CSDD1008_Week12">
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>Contact: natishKumar@Loyalistcollege.com</p>
      </footer>
    </div>
  );
};

export default App;