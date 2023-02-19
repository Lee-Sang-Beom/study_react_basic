
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

/*
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./Components/Navigation";
import routes from "./routes.js";

const Component1 = ({ children }) => {
  console.log(React.Children.count(children))
  const arr = React.Children.toArray(children);
  if(React.Children.only){
    console.log('wow',arr);
    
  }
  return <>{children}</>;
};

const data = [{text:"zero",ts: "test"},{ text: "first",ts: "test2" },
 { text: "second",ts: "test3" }, { text: "third",ts: "test4" }];

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Component1>
        {data.map((item, idx)=>{
          return <p style={{ fontSize: "2rem" }} key={idx}>
            {item.text}
            {item.ts}
          </p>;
        })}
      </Component1>
    </React.Fragment>
  );
}

export default App;

*/