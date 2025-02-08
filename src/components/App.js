import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="app">
      <div className="preview">
        <h1>Heading</h1>
        <br />
        <span>
          This is some <strong>bold</strong> text.
        </span>
        <br />
        <label htmlFor="userInput">Enter text:</label>
        <textarea id="userInput" onChange={handleChange} value={text} />
        <p>Preview: {text}</p>
      </div>
    </div>
  );
}
