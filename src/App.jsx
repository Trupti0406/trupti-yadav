import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          id="home"
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div id="work">
          <Experience />
        </div>
        <div id="skills">
          <Tech />
        </div>
        <div id="projects">
          <Works />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
