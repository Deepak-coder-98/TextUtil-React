import React, { memo, useState } from "react";
import PropTypes from "prop-types";

const TextForm = memo(function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("Enter text here");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  
  const handleCopyClick = () => {
    let textElement = document.getElementById("myBox");
    let text = textElement && textElement.value;
    if(text.length === 0 || text === "Enter text here") {
      showAlert('No Text Found!','warning');
      return;
    }
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    setText(textElement.value);
    showAlert('Text Copied!','success');
  };

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
    handleCharAndWordCount(newText);
  };
  const handleCharAndWordCount = (newText) => {
    let wordList = newText.split(" ");
    let validWordList = wordList.filter(
      (word) => word !== "" && word.length > 0
    );
    setWordCount(validWordList.length);
    setCharCount(validWordList.join("").length);
  };
  const toggleMode = () => {
    if (mode === "light") {
      return {
        backgroundColor: "white",
        color: "black",
      };
    } else {
      return {
        backgroundColor: "#282b2e",
        color: "white",
      };
    }
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    handleCharAndWordCount(newText);
    
  };

  let minutesRead = (0.008 * wordCount).toPrecision(2);
  return (
    <>
      <div className=" container mb-3" style={toggleMode()}>
        <h1>{heading}</h1>
        <textarea
          className="form-control mb-3"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          onFocus={handleClearClick}
          style={toggleMode()}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={toggleMode()}>
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {charCount} characters
        </p>
        <p>{minutesRead} Minutes Read</p>
      </div>
    </>
  );
});

TextForm.propTypes = { heading: PropTypes.string.isRequired };

export default TextForm;
