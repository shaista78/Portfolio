import "../style.css"
//import profile from "./images/profile_pic.png"
const Home =() =>{
    return <>
          {/* <!-- Hero Section  --> */}
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>Hello, <span></span></h1>
          <h1>My Name is <span></span></h1>
          <h1>SHAISTA SULTHANA <span></span></h1>
     
          {/* <a href="#projects" type="button" className="cta">Portfolio</a> */}
        </div>
             <p className="he">Full-Stack Web Developer <span></span></p>
        {/* <div className="profile">
          <img className="img1" src={profile} alt="pic" />
        </div> */}
      </div>
    </section>
    {/* <!-- End Hero Section  --> */}
    </>
}
export {Home}