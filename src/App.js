
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./Components/Navigation";
import routes from "./routes.js";

function App() {

  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Navigation/>
        <div className="container">
          <Routes>
            {
              routes.map((item) => (
                <Route key={item.path} path={item.path} exact element={item.component}/>
              ))
            }
          </Routes>
        </div>     
      </Router>
    </React.Fragment>
  );
}

export default App;
