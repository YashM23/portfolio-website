// import Footer from "./Components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

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
