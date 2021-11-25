import "../style.css"

import first from "../All/images/firstproject.png"
import Fernway from "../All/images/fernway.png"
import second from "../All/images/SecondProject.png"
import source from "../All/images/git.png"
import live from "../All/images/live.png"
import medium from "../All/images/midium.jpg"

const Projects = () => {
  return <>

    <div id="projects">
      <center>
        <h1 className="section-title">Projects info</h1>

        <div className="one">

          <img src={first} alt=""/>
          <h2>Purplle Clone </h2>
          <p>Purple.com is ecommerce website which sells cosmetic products online, This was my first team project done in Masai School course as a first construct week project in first unit. it was built by team of 4 members.</p>
          <br />
          <div>
            <p><b>Tech Stacks:</b> HTML | CSS | JavaScript</p>
          </div>
          <br />
          <div>
            <a href="https://github.com/shaista78/purpel_web_clone"><img className="img" src={source} alt="" /></a>
          
            <a href="https://purplleclone.herokuapp.com/html/home.html">  <img className="img1" src={live} alt="" /></a>

            <a href="https://medium.com/@shaistasulthana78/cloning-of-purplle-com-website-in-just-6-days-using-html-css-and-js-845ce38f71cc"><img className="img2" src={medium} alt="" /></a>

          </div>
        </div>

        <div className="one">
          <img src={second} alt=""/>
          <h2>Purplle Clone with Backend</h2>
          <p>Purple.com website sells cosmetic products online, this project was built with backend. Second construct week project</p>
          <div>
            <br />
            <p><b>Tech Stacks:</b> HTML | CSS | Nodejs | Express | mongoodb | Handlebars</p>
            <br />
          </div>
          <div>
            <a href="https://github.com/shaista78/Cloning_Website_Using_Backend"><img className="img" src={source} alt="" /></a>
            <a href="">   <img className="img1" src={live} alt="" /></a>
            <a href="https://medium.com/@shaistasulthana78/cloning-purplle-com-website-fda2c3f3914c"><img className="img2" src={medium} alt="" /></a>
          </div>
        </div>
        <div className="one">

          <img className="im" src={Fernway} alt=""/>
          <h2>Fernway Solo-Traveller App</h2>
          <p>Fernway is an app for solo travelers, including features for searching your travel destination with a wide range of accommodation information, and also making a tour plan.</p>
          <div>
            <br />
            <p><b>Tech Stacks:</b> HTML | CSS | Reactjs | Json-server</p>
            <br />
          </div>

          <div>
            <a href="https://github.com/madanakrishnanmasai/fernway_travel"> <img className="img" src={source} alt="" /></a>
            <a href="">      <img className="img1" src={live} alt="" /></a>
            <a href="https://medium.com/@shaistasulthana78/fernway-solo-traveller-d57af8dea494"> <img className="img2" src={medium} alt="" /></a>
          </div>

        </div>


      </center>


    </div>
  </>
}
export { Projects }