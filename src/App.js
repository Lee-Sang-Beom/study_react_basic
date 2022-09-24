
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import React from "react";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Navigation/>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/blogs" element= {<Blogs/>}/>
          </Routes>
        </div>     
      </Router>
    </React.Fragment>
  );
}

export default App;
