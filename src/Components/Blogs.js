import axios from "axios";
import React, { useState } from "react";
import TypeIt from "typeit-react";

export default function Blogs() {
  const [title, setTitie] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    // axios lib > post
    axios.post("http://localhost:3001/posts", {
      // title: title,
      // body: body
      title,
      body,
    });

    alert("저장되었습니다.");
    setTitie("");
    setBody("");
  };

  return (
    <div>
      <div>
        {/* page name */}
        <div className="my-5 border-bottom border-secondary pb-2 w-50 mx-auto">
          <h1 className="fw-bold text-center fs-2 ">
            <TypeIt
              options={{
                strings: ["STUDY REACT"],
                speed: 150,
                waitUntilVisible: true,
                loop: true
              }}
            />
          </h1>
        </div>
        {/* title */}
        <div className="mb-3">
          <label className="form-label fw-semibold">TITLE</label>
          <input
            className="form-control"
            value={title}
            placeholder="Input title name"
            onChange={(e) => {
              setTitie(e.target.value);
            }}
          />
        </div>
        {/* body */}
        <div className="mb-3">
          <label className="form-label fw-semibold">BODY</label>
          <textarea
            className="form-control"
            placeholder="Input your comment"
            rows={15}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>

        {/* post */}
        <button className="btn btn-primary fw-semibold" onClick={onSubmit}>
          POST
        </button>
      </div>
    </div>
  );
}
