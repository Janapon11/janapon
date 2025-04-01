
const Navbar = () => {
    return (
      <nav>
        <div className="nav-container">
          {/* Logo on the Left */}
          <div className="logo">JANAPON</div>
  
          {/* Navigation Links on the Right */}
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  