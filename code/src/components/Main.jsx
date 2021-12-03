import "./style.css"
import { Navbar } from "./All/Navabar"
import { Home } from "./All/Home"
import { About } from "./All/About"
import { Tools } from "./All/Tools"
import { Projects } from "./All/Projects"
import { Contact } from "./All/Contact"





const Main = () => {
  return <div>
     <Navbar/>
    
    <Home/>
   
    <About/>
    <hr/>
    <hr/>
    <Tools/>
    <hr/>
    <hr/>
    <Projects/>
  <hr/>
    
    <Contact/>


     


  </div>

}

export { Main }