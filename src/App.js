
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./Components/Navigation";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Navigation/>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/blogs" exact element= {<ListPage/>}/>
            <Route path="/blogs/create" exact element= {<CreatePage/>}/>
            <Route path="/blogs/edit" exact element= {<EditPage/>}/>
          </Routes>
        </div>     
      </Router>
    </React.Fragment>
  );
}

export default App;
