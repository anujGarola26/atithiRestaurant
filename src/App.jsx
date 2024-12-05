import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import  Menu  from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/menu" element = {<Menu/>}/>
        <Route path="*" element = {<PageNotFound/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App