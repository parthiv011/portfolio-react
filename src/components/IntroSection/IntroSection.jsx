import './IntroSection.css';

export const IntroSection = () => {
  return (
    <section className="main-intro">
      <video className="background-video" src="test.mp4" autoPlay muted loop />
      <div className="main-info">
        <h1 className="main-heading">Hello, I'm Parthiv...!</h1>
        <p className="main-desc">
          I'm Parthiv, a Software Engineer who's all about turning wild ideas
          into kick-ass web apps. When I'm not submerged in code-commits, You'll
          find me lost in the perfect frame, chasing light and shadows. Let's
          team up and build some exceptional products..!
        </p>
        <div className="btn-container">
          <a href="Parthiv_resume (3).pdf" className="btn active" download>
            Download Resume
          </a>
          <a href="#projects" className="btn outline">
            Know More &darr;
          </a>
        </div>
      </div>
    </section>
  );
};
