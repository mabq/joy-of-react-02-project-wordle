import React from "react";

const ROW_LETTERS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function VirtualKeyboard({ keyResults, handleLetterButtonPress, disabled }) {
  return (
    <div className="keyboard-wrapper">
      {ROW_LETTERS.map((letters, index) => (
        <RowLetters
          key={index}
          letters={letters}
          handleLetterButtonPress={handleLetterButtonPress}
          keyResults={keyResults}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

function RowLetters({
  letters,
  handleLetterButtonPress,
  keyResults,
  disabled,
}) {
  return (
    <div className="key-row">
      {letters.split("").map((letter, index) => (
        <Letter
          letter={letter}
          key={index}
          status={keyResults[letter]}
          handleLetterButtonPress={handleLetterButtonPress}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

function Letter({ letter, status, handleLetterButtonPress, disabled }) {
  const className = status ? `key-button ${status}` : "key-button";
  return (
    <button
      className={className}
      onClick={() => handleLetterButtonPress(letter)}
      disabled={disabled}
    >
      {letter}
    </button>
  );
}

export default VirtualKeyboard;
