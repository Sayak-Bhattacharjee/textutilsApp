import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  const handleUcClick = () => {
    updateText(text.toUpperCase());
  };
  const handleLcClick = () => {
    updateText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    updateText(event.target.value);
  };
  const makeItTalk = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support speech synthesis.");
    }
  };
  const [text, updateText] = useState();
  return (
    <>
      <div className="container" id="mainContainer">
        <div className="input-group">
          <span className="input-group-text my-3" 
          style={
            props.mode === 'dark'
            ? { backgroundColor: "rgb(42 42 127)",color: "white"}
            : props.mode === "redTheme" ? { backgroundColor: "#9a2530",color: "white"}
            : props.mode === "greenTheme" ? { backgroundColor: "rgb(65 154 65)",color: "white"}
            : { backgroundColor: "white",color: "black"}
          }
        // style={themeStyle}
          >{props.header}</span>
          <textarea
            className="form-control my-3"
            aria-label="With textarea"
            rows="8"
            value={text}
            placeholder="Enter text here"
            style={
                props.mode === 'dark'
                ? { backgroundColor: "grey",color: "white"}
                : props.mode === "redTheme" ? { backgroundColor: "rgb(95 48 52)",color: "#a18686"}
                : props.mode === "greenTheme" ? { backgroundColor: "#6aad6a",color: "white"}
                : { backgroundColor: "white",color: "black"}
              }
            onChange={handleOnChange}
          ></textarea>
        </div>
        {/* <button className="btn btn-primary my-3" onClick={textAnalytics}>Text Analytics</button> */}
        <button disabled={text ? text.length===0 : true} className="btn btn-primary my-3" onClick={handleUcClick}>
          Convert to Upper Case{" "}
        </button>
        <button disabled={text ? text.length===0 : true} className="btn btn-primary my-3 mx-3" onClick={handleLcClick}>
          Convert to Lower Case{" "}
        </button>
        <button disabled={text ? text.length===0 : true} className="btn btn-primary my-3 mx-3" onClick={makeItTalk}>
          Speak
        </button>
      </div>
      <div className="continer my-3" id="previewBOx"
      style={
        props.mode === 'dark'
        ? { backgroundColor: "grey",color: "white"}
        : props.mode === "redTheme" ? { backgroundColor: "rgb(95 48 52)",color: "#a18686"}
        : props.mode === "greenTheme" ? { backgroundColor: "#6aad6a",color: "white"}
        : { backgroundColor: "white",color: "black"}
      }
      >
        <h3>You text analytics is below:</h3>
        <p>
          {text
          ? text.trim().split("/\s+/").length
          : 0} words and {text ? text.length : 0}{" "}
          characters
        </p>
        <p>
          Avg. time to read:{" "}
          {Math.ceil((30 / 125) * (text ? text.split("/\s+/").length : 0))} seconds
        </p>
        <h3>Preview</h3>
        <p>{text ? text : `You will get your text preview here`}</p>
      </div>
    </>
  );
}

Textarea.propTypes = {
  header: PropTypes.string,
};

// Textarea.defaultProps = {
//   header: "Set functional heading for text area",
// };
