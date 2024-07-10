import React from "react";

function VirtualKeyboard({ keyboardStatus, handleButtonPress }) {
  const rowLetters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="keyboard-wrapper">
      {rowLetters.map((letters, index) => (
        <RowLetters
          key={index}
          letters={letters}
          handleKeypress={handleButtonPress}
          keyboardStatus={keyboardStatus}
        />
      ))}
    </div>
  );
}

function RowLetters({ letters, handleKeypress, keyboardStatus }) {
  return (
    <div className="key-row">
      {letters.split("").map((letter, index) => (
        <Letter
          letter={letter}
          key={index}
          status={keyboardStatus[letter]}
          handleKeypress={handleKeypress}
        />
      ))}
    </div>
  );
}

function Letter({ letter, status, handleKeypress }) {
  const className = status ? `key-button ${status}` : "key-button";
  return (
    <button className={className} onClick={() => handleKeypress(letter)}>
      {letter}
    </button>
  );
}

export default VirtualKeyboard;
