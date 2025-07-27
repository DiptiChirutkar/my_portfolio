import React from "react";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import "./App.css";
import Experience from "./Components/Experience";

function App() {
 
  return (
    <>
      <Header/>
      <Profile />
      <Service/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;