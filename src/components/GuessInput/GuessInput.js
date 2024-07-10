import React from "react";

import { CHARACTERS_PER_WORD } from "../../constants";

import VirtualKeyboard from "./VirtualKeyboard";

function GuessInput({ submitGuess, keyboardStatus, disabled }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(value);
    setValue(""); // reset input form after submit
  }

  function handleButtonPress(key) {
    if (value.length < CHARACTERS_PER_WORD) {
      setValue(value + key);
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
          value={value}
          onChange={(event) => setValue(event.target.value.toUpperCase())}
        />
      </form>
      {!disabled && (
        <VirtualKeyboard
          keyboardStatus={keyboardStatus}
          handleButtonPress={handleButtonPress}
        />
      )}
    </>
  );
}

export default GuessInput;
