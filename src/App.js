import React, { useState } from "react";
import { Reset } from "styled-reset";

function App() {

  const [title, setTitie] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = () =>{
    console.log(title, body);
  }
  return (
    <React.Fragment>
      <Reset />
      <div className="container">
        {/* title */}
        <div className="mb-3">
          <label className="form-label">TITLE</label>
          <input className="form-control" value={title} onChange={(e)=>{setTitie(e.target.value);}}/>
        </div>

        {/* body */}
        <div className="mb-3">
          <label className="form-label">BODY</label>
          <textarea className="form-control" rows={15} value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
        </div>

        {/* post */}
        <button className ="btn btn-primary" onClick={onSubmit} >POST</button>
      </div>
    </React.Fragment>
  );
}

export default App;
