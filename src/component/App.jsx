import React from "react";
import Lottie from "lottie-react"
import Animation from "./Lottie/shooting stars.json"
import Home from "./Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import About from "./About"
import Project from "./Project"
import Resume from "./Resume"
import Refresh from "./Refresh";
import MoveToTop from "./MoveToTop";


function App() {
 

  return (
    <div className="app-container">
      
      {/* <Refresh /> */}
      <Lottie className="bg1" animationData={Animation} loop={true}/>
      
      
      
      
        <NavBar/>
        <MoveToTop/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      
       
        <Footer/> 

    </div>
  )
}

export default App
