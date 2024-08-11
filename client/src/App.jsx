// import Footer from "./Components/Footer";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";

function App() {
  return (
    <div className="">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Routes> */}

      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
