import React, { useState } from "react";

export default function Textform(props) {
  //Upercase Function
  const handleupclick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  //Lowercase Function
  const handleloclick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const cleartext = () => {
    let newText = "";
    setText(newText);
  };
  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  const [text, setText] = useState("");
  //   text = "new text"; // wrong way to change the state
  //   setText("new text"); //correct way to change the state
  return (
    <>
      <div className="conatiner">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        {/* mx-1 bootstrap ki class hy jo x ma margin dy ge */}
        <button className="btn btn-success mx-1" onClick={handleupclick}>
          Convert too uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleloclick}>
          Convert too lowercase
        </button>
        <button className="btn btn-success mx-1" onClick={cleartext}>
          clear
        </button>
      </div>
      <div className="conatiner my-3"></div>
      <h2>Your Text Summary</h2>
      <p>
        {text.split(" ").length} Words and {text.length} Characters
      </p>
      <h3>preview</h3>
      <p>{text.length > 0 ? text : "Enter abover text to preview it here"}</p>
    </>
  );
}
