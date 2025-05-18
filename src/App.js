import NavBar from "./Component/navbar/navbar";
import '../src/index.css'
import Intro from "./Component/intro/intro";
import Skills from "./Component/Skills/skills";
import Project from "./Component/projects/project";
import Contact from "./Component/contact/contact";
import Footer from "./Component/footer/footer";
import About from "./Component/AboutMe/about";

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
