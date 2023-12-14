import BannerComponent from "./Components/BannerComponent"
import ContactComponent from "./Components/ContactComponent"
import FooterComponent from "./Components/FooterComponent"
import NavbarComponent from "./Components/NavbarComponent"
import ProjectsComponent from "./Components/ProjectsComponent"
import SkillComponents from "./Components/SkillComponents"


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <BannerComponent/>
      <SkillComponents/>
      <ProjectsComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </div>
  )
}

export default App
