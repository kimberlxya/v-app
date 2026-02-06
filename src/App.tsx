import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are u sure?",
  "But New year, New us, Right way?",
  "But I won't complain?",
  "But I'm talking to the mooOOn?",
  "But I tried my best on this?",
  "Okay thennn ):",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2t1YmJjcDU4YjVzNGh5cm1pdHpudWdobWJldzNvOXIxMzFkOXJvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZudTA0bGgwdXlzeWNyZ2xuN3VlZ3VpMTh0YzJrZTlhN2JieG5wMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gjHkRHSuHqu99y9Yjt/giphy.gif"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
