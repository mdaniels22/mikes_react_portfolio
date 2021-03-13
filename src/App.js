import React from "react";

//import { useInView } from "react-intersection-observer";

import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar/NavigationBar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Container from "react-bootstrap/esm/Container";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SideSocial from "./components/SideSocial/SideSocial";

import "./App.css";

const App = () => {
  return (
    <>
      <NavigationBar />
      {/* <SideSocial /> */}
      <Landing
        name="Mike Daniels"
        message="I like to code.
         I use coding to create sites and applications.
        These sites and applications can be used online. Some may call me a Web Developer but I just call myself a Coder. "
      />

      <About
      // name="Mike Daniels"
      // location="Temple Hills, MD"
      // email="mikedaniels22@gmail.com"
      />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
