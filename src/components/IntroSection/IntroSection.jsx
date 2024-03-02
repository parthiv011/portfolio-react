import './IntroSection.css';

export const IntroSection = () => {
    return <section class="main-intro">
    <div class="main">
      <div class="main-info">
        <h1 class="main-heading">Hello, I'm Parthiv</h1>
        <p class="main-desc">
          A Full Stack Web Developer & Open Source Contributor. Currently working with MERN stack, Prisma and Docker.
        </p>
        <a href="" class="btn active">Download Resume</a>
        <a href="" class="btn outline">Know More &darr;</a>
      </div>
      <div class="main-video">
        <video src="test.mp4" autoPlay muted loop />
      </div>
    </div>
  </section>
}