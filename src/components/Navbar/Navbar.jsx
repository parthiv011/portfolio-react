import './Navbar.css';

export const Navbar = () => {
  return (
      <header class="header">
        <a href="" class="logo">
          <span id="parthiv">Parthiv</span>
          <span id="parmar">Parmar.</span>
        </a>
        <nav class="main-nav">
          <ul class="main-nav-links">
            <li>
              <a href="#" class="main-nav-links">
                Project
              </a>
            </li>
            <li>
              <a href="#" class="main-nav-links">
                Work
              </a>
            </li>
            <li>
              <a href="#" class="main-nav-links">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
  );
};
