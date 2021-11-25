import "../style.css"
import Linked from "../All/images/linked.png"
import git from "../All/images/github.png"


import medium from "../All/images/midium.jpg"

const Contact = () => {
    return <> 
    {/* <!-- Contact Section --> */}
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact info</h1>
      </div>
      <br/>
      <br/>
        <br/>
      <br/>
        <br/>
      <br/>
        <br/>
      <br/>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="phone" /></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+91 7093532066</h2>
            {/* <h2>+1 234 123 1234</h2> */}
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="mail"  /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>shaistasulthana78@gmail.com</h2>
            {/* <h2>abcd@gmail.com</h2> */}
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="address" /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Chittoor, Andhra Pradesh</h2>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>Shaista</span> <span>Sulthana</span></h1>
      </div>
      <h2>You can also get in touch with me... </h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="https://github.com/shaista78"><img src={git} alt="git"/></a>
        </div>
        
        <div class="social-item">
          <a href="https://www.linkedin.com/in/shaista-sulthana-121432175/"><img src={Linked} alt="linkedin" /></a>
        </div>
        
        <div class="social-item">
          <a href="https://medium.com/@shaistasulthana78"><img src={medium} alt="medium" /></a>
        </div>
      </div>
      <p>Build with ❤️ by Shaista Sulthana</p>
    </div>
  </div>
    
   
  </section>
  {/* <!-- End Contact Section --> */}

    </>
}
export {Contact}