import { useState } from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./assets/styles/App.css";

function App() {
  const [currentComponent, setCurrentComponent] = useState(AboutMe);

  const handleComponentChange = (event) => {
    let componentName = event.target.textContent.trim();
    console.log(componentName);
    setCurrentComponent(componentMap[componentName]);
  }

  const componentMap = {
    'About Me': AboutMe,
    'Portfolio': Portfolio,
    'Contact Me': ContactMe,
    'Resume': Resume,
  };

  return (
    <div>
      <Header onClickComponentChange={handleComponentChange}/>
      {currentComponent === AboutMe && <AboutMe/>} 
      {currentComponent === Portfolio && <Portfolio/>}
      {currentComponent === ContactMe && <ContactMe/>}
      {currentComponent === Resume && <Resume/>}
      <Footer/>
    </div>
  )
}

export default App;
