import React from "react";

import { CHARACTERS_PER_WORD } from "../../constants";

import VirtualKeyboard from "./VirtualKeyboard";

function GuessInput({ submitGuess, keyResults, disabled }) {
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(inputValue);
    setInputValue(""); // reset input form after submit
  }

  function handleLetterButtonPress(key) {
    if (inputValue.length < CHARACTERS_PER_WORD) {
      setInputValue(inputValue + key);
    }
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          placeholder="Enter your guess"
          required
          autoComplete="off"
          disabled={disabled}
          minLength={CHARACTERS_PER_WORD}
          maxLength={CHARACTERS_PER_WORD}
          pattern={`[A-Z]{${CHARACTERS_PER_WORD}}`}
          title="5 letter word"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value.toUpperCase())}
        />
      </form>
      <VirtualKeyboard
        keyResults={keyResults}
        disabled={disabled}
        handleLetterButtonPress={handleLetterButtonPress}
      />
    </>
  );
}

export default GuessInput;
