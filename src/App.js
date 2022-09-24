
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
        <Routes>
          <Route path="/" exact element={<Home />}>
            {/* 위 Link to = "/"로 맞춘 부분으로 사용자가 접근하면 이 부분을 보여줌 */}
          </Route>
          <Route path="/blogs" element= {<Blogs/>}>
            {/* 위 Link to = "/"로 맞춘 부분으로 사용자가 접근하면 이 부분을 보여줌 */}
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
