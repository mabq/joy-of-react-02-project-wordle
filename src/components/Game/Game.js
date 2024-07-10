import React from "react";

import { WORDS } from "../../data";
import { GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { checkGuess, checkKeyStatus } from "../../game-helpers";

import GuessGrid from "../GuessGrid";
import GuessInput from "../GuessInput";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [keyboardStatus, setKeyboardStatus] = React.useState({});
  const [wonWith, setWonWith] = React.useState(0);

  function submitGuess(intendedGuess) {
    const newGuess = checkGuess(intendedGuess, answer);
    setGuesses([...guesses, newGuess]);
    //
    const newKeyboardStatus = { ...keyboardStatus };
    newGuess.forEach(({ letter, status: guessStatus }) => {
      const currentStatus = newKeyboardStatus[letter];
      newKeyboardStatus[letter] = checkKeyStatus(guessStatus, currentStatus);
    });
    setKeyboardStatus(newKeyboardStatus);
    //
    if (intendedGuess === answer) {
      setWonWith(guesses.length);
    }
  }

  return (
    <>
      <GuessGrid guesses={guesses} />
      <GuessInput
        submitGuess={submitGuess}
        keyboardStatus={keyboardStatus}
        disabled={!!wonWith || guesses.length >= GUESSES_ALLOWED}
      />
      <Banner
        wonWith={wonWith}
        gameover={guesses.length >= GUESSES_ALLOWED}
        answer={answer}
      ></Banner>
    </>
  );
}

export default Game;
