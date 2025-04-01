import myPhoto from '../assets/me.png';

const About = () => {
  return (
    <section id="about">
     
      <div className="about-container">
        <img src={myPhoto} alt="Briann Christian Janapon" className="about-photo" />
        <p className="about-description">
          Hi, I'm Briann Christian Janapon. I'm a passionate web developer with expertise in building modern, responsive, and efficient web applications. I love working with React and always aim to create clean, user-friendly designs.
        </p>
      </div>
    </section>
  );
};

export default About;
