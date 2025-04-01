import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skill-card">
          <div className="skill-header">
            <img
              src="/js.png"
              alt="JavaScript"
              className="skill-image"
            />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "90%" }}></div>
            </div>
            <p className="skill-percentage">90%</p>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            <img
              src="/react.png"
              alt="React"
              className="skill-image"
            />
            <h3>React</h3>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "85%" }}></div>
            </div>
            <p className="skill-percentage">85%</p>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            <img
              src="/figma.png"
              alt="Figma"
              className="skill-image"
            />
            <h3>Figma</h3>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "80%" }}></div>
            </div>
            <p className="skill-percentage">80%</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
