import React, { useState } from "react";
import { Reset } from "styled-reset";

function App() {

  const [title, setTitie] = useState('');
  return (
    <React.Fragment>
      <Reset />
      <div className="container">
        <div className="mb-3">
          <label className="form-label">TITLE</label>
          <input className="form-control" value={title} onChange={(e)=>{setTitie(e.target.value); console.log(e.target.value)}}/>
        </div>
        <button className ="btn btn-primary">POST</button>
      </div>
      
    </React.Fragment>
  );
}

export default App;
