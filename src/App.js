import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"


function App() {
  return (
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/projects"  element={<Projects/>}/>
      </Routes>
  );
}

export default App;
