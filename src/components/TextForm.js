import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const clickUpHandle = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
    setTimeout(() => {
      props.showAlert(null);
    }, 1500);
  };
  const clickLowHandle = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
    setTimeout(() => {
      props.showAlert(null);
    }, 1500);
  };
  const clickFirstHandle = () => {
    setText(
      text
        .toLowerCase()
        .replace(text.toLowerCase()[0], text.toLowerCase()[0].toUpperCase())
    );
    props.showAlert("Converted to Sentence Case", "success");
    setTimeout(() => {
      props.showAlert(null);
    }, 1500);
  };
  const changeHandle = (e) => {
    setText(e.target.value);
  };
  const clearHandle = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
    setTimeout(() => {
      props.showAlert(null);
    }, 1500);
  };
  const copyHandle = () => {
    let copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Text Copied to ClipBoard", "success");
    setTimeout(() => {
      props.showAlert(null);
    }, 1500);
  };
  let extraSpaceHandle = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
    setTimeout(() => {
      props.showAlert(null);
    }, 1500);
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.myMode === "light" ? "black" : "white" }}>
          {props.head}
        </h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={changeHandle}
            style={{
              backgroundColor: props.myMode === "light" ? "white" : "#212529",
              color: props.myMode === "light" ? "black" : "white",
            }}
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={clickUpHandle}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger my-2 mx-3" onClick={clickLowHandle}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}
          className="btn btn-success my-2 mx-3"
          onClick={clickFirstHandle}
        >
          Sentence Case
        </button>
        <button disabled={text.length===0} className="btn btn-warning my-2 mx-3" onClick={copyHandle}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-dark my-2 mx-3" onClick={extraSpaceHandle}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-danger my-2 mx-3" onClick={clearHandle}>
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h3 style={{ color: props.myMode === "light" ? "black" : "white" }}>
          Your Text Summary
        </h3>
        <p style={{ color: props.myMode === "light" ? "black" : "white" }}>
          {text.length==0?0:text.split(/\s+/).length} words and {text.length} chars
        </p>
        <h2
          className="my-4"
          style={{ color: props.myMode === "light" ? "black" : "white" }}
        >
          Preview
        </h2>
        <div style={{ color: props.myMode === "light" ? "black" : "white" }}>
          {text.length > 0 ? text : "Nothing to preview"}
        </div>
      </div>
    </>
  );
}
