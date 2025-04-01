import { useEffect, useState } from "react";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          setVisibleSections((prev) => ({
            ...prev,
            [sectionId]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <Navbar /> {/* Optional */}
      
      {/* About Section */}
      <section id="about" className={visibleSections.about ? "visible" : ""}>
        <h2 className="section-title">About Me</h2> {/* Title for About */}
        <About />
      </section>
      
      <div className="section-divider"></div> {/* Divider after About section */}
      
      {/* Skills Section */}
      <section id="skills" className={visibleSections.skills ? "visible" : ""}>
        <h2 className="section-title">My Skills</h2> {/* Title for Skills */}
        <Skills />
      </section>
      
      <div className="section-divider"></div> {/* Divider after Skills section */}
      
      {/* Projects Section */}
      <section id="projects" className={visibleSections.projects ? "visible" : ""}>
        <h2 className="section-title">My Projects</h2> {/* Title for Projects */}
        <Projects />
      </section>
      
      <div className="section-divider"></div> {/* Divider after Projects section */}
      
      {/* Contact Section */}
      <section id="contact" className={visibleSections.contact ? "visible" : ""}>
        <h2 className="section-title">Contact Me</h2> {/* Title for Contact */}
        <Contact />
      </section>
      
      <div className="section-divider"></div> {/* Divider after Contact section */}
      
      <Footer />
    </div>
  );
};

export default App;
