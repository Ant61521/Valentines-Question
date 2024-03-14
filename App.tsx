import React, { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Ely why did you say no",
  "Don't do this to me",
  "This is messed up",
  "Choose Yes please",
];

function App() {
  const [noCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  
  const handleNoClick = () => {
    setCount(noCount + 1 >= phrases.length ? 0 : noCount + 1);
  };

  const getNoButton = () => {
    return phrases[noCount];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bear kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear.gif"
          />
          <div className="text">I knew you would say Yes!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div>You are the most amazing girlfriend ever. Your kind, warm, and loving soul along with your face, body, mind, heart makes you the most beautiful angel ever. The sparkle in your eyes makes my heart melt, when you smile my heart melts, when you talk about yourself my heart melts, when I kiss you my heart melts, when I hold you my heart is complete.</div>
          <div>Will you be my valentine cutie pie?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButton()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
