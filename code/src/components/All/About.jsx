import "../style.css"
import resume from "./images/resume.pdf"
const About = () => {
  return <>
    {/* <!-- About Section --> */}
    <section id="about">
      <div className="about container">

        <div className="col-right">
          <h1 className="section-title">About me</h1>
          <h2>Full Stack Web Developer</h2>
          <p className="abt">Passionate web developer with the ability to write efficient code using
            MERN stack. Excited about building interactive and user-friendly
            websites. Looking for a role as web developer and hoping to
            contribute to the growth of an organization.
            <br />Presently At Masai,I am Learning Full-Stack Web Development. I have had the chance to work on collaborative projects which have been an amazing learning experience. I have created websites using Express, HTML CSS and NodeJs, and other NPM packages. I am now learning ReactJs.

            <br />And also,I would love to collaborate with other developers on interesting projects.</p>
          <br />
          <br />
          <a href={resume} className="cta">Download Resume</a>
        </div>
      </div>
    </section>
    {/* <!-- End About Section --> */}
  </>
}
export { About }