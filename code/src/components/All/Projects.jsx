import "../style.css"

import first from "../All/images/firstproject.png"
import Fernway from "../All/images/fernway.png"
import second from "../All/images/SecondProject.png"
import source from "../All/images/git.png"
import live from "../All/images/live.png"
import medium from "../All/images/midium.jpg"

const Projects = () => {
  return <>
      <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title"><span>R</span>ecent <span>P</span>rojects</h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
           
            <h1>Purplle Clone </h1>
            <p>Purple.com is ecommerce website which sells cosmetic products online, This was my first team project done in Masai School as a first construct week project in the first unit. it was build by team of 4 members.</p>
              <h2>Tech Stack: </h2>
            <p>HTML | CSS | JavaScript </p>
            <br /><br />
                   <div className="links">
              <div className="link1"><a href="https://github.com/shaista78/purpel_web_clone" target="blank"><img  src={source} alt="" /></a></div>
              <div className="link2"><a href="https://purplleclone.herokuapp.com/html/home.html" target="blank">  <img  src={live} alt="" /></a></div>
              <div className="link3"><a href="https://medium.com/@shaistasulthana78/cloning-of-purplle-com-website-in-just-6-days-using-html-css-and-js-845ce38f71cc" target="blank"><img  src={medium} alt="" /></a>
              </div>
            </div>
          </div>
          <div class="project-img">
            <img src={first} alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
         
            <h1>Purplle Clone with Backend</h1>
            <p>Purple.com website sells cosmetic products online, this project was build with backend. Second construct week project </p>
              <h2>Tech Stack: </h2>
            <p>HTML | CSS | JavaScript | Express Js | Mongo DB </p>
            <br /><br />
            <div className="links">
              <div className="link1"><a href="https://github.com/shaista78/Cloning_Website_Using_Backend" target="blank"><img src={source} alt="source" /></a></div>
              <div className="link2"><a href="https://purplleclone.herokuapp.com/html/home.html" target="blank"><img src={live} alt="live" /></a></div>
              <div className="link3"><a href="https://medium.com/@shaistasulthana78/cloning-purplle-com-website-fda2c3f3914c" target="blank"><img src={medium} alt="blog" /></a></div>
            </div>
          </div>
          <div class="project-img">
            <img src={second} alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            
            <h1>Fernway</h1>
            <p>Fernway is an app for solo travelers, including features for searching your travel destination with accommodation information, and also making a tour plan.this project is build for <b> Mobile view </b></p>
            <h2>Tech Stack: </h2>
            <p>React Js | CSS | Styled-components | Express Js | Mongo DB </p>
            <br /><br />
            <div className="links">
              <div className="link1"><a href="https://github.com/madanakrishnanmasai/fernway_travel" target="blank"><img  src={source} alt="" /></a></div>
              <div className="link2"><a href="https://fernway-travels.herokuapp.com/" target="blank">  <img  src={live} alt="" /></a></div>
              <div className="link3"><a href="https://medium.com/@shaistasulthana78/fernway-solo-traveller-d57af8dea494" target="blank"><img src={medium} alt="" /></a>
              </div>
            </div>
          </div>
          <div class="project-img">
            <img  src={Fernway} alt="img"/>
          </div>
        </div>
       
      </div>
    </div>
  </section>
    {/* <div id="projects">
      <center>
        <h1 className="section-title">Projects info</h1>
        <div className="custom_div" >
        <div className="project-item" id="one">

          <img  src={first} alt=""/>
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

        <div className="project-item" id="two">
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
            <a href="/">   <img className="img1" src={live} alt="" /></a>
            <a href="https://medium.com/@shaistasulthana78/cloning-purplle-com-website-fda2c3f3914c"><img className="img2" src={medium} alt="" /></a>
          </div>
        </div>
        <div className="project-item" id="three">

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
            <a href="/">      <img className="img1" src={live} alt="" /></a>
            <a href="https://medium.com/@shaistasulthana78/fernway-solo-traveller-d57af8dea494"> <img className="img2" src={medium} alt="" /></a>
          </div>

        </div>
</div>

      </center>


    </div> */}
  </>
}
export { Projects }