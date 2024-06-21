import './Navbar.css';

export const Navbar = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();

    const element = document.getElementById(target);
    if (target) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <a href="" className="logo">
        <span id="parthiv">Parthiv</span>
        <span id="parmar">Parmar.</span>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-links">
          <li>
            <a
              href="#projects"
              className="main-nav-links"
              onClick={(e) => handleScroll(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="main-nav-links"
              onClick={(e) => handleScroll(e, 'blogs')}
            >
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-links">
              Work
            </a>
          </li>
          <li>
            <a
              href="#"
              className="main-nav-links"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
