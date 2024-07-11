import React from "react";

import { WORDS } from "../../data";
import { GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { checkGuess, checkKeyStatus } from "../../game-helpers";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import Banner from "../Banner";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS)); // avoid executing the `sample` function on re-renders
  const [guessResults, setGuessResults] = React.useState([]);
  const [keyResults, setKeyResults] = React.useState({});
  const [won, setWon] = React.useState(false);

  console.log(answer);

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuessResults([]);
    setKeyResults({});
    setWon(false);
  }

  function submitGuess(word) {
    const wordResults = checkGuess(word, answer);
    setGuessResults([...guessResults, wordResults]);

    const keyResultsCopy = { ...keyResults };
    wordResults.forEach(({ letter, status }) => {
      const currentStatus = keyResultsCopy[letter];
      keyResultsCopy[letter] = checkKeyStatus(status, currentStatus); // overwrite status logic
    });
    setKeyResults(keyResultsCopy);

    if (word === answer) {
      setWon(true);
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />

      <GuessInput
        submitGuess={submitGuess}
        keyResults={keyResults}
        disabled={won || guessResults.length >= GUESSES_ALLOWED}
      />

      {won && (
        <Banner status="happy" resetGame={resetGame}>
          <p>
            Congratulations! Got it in
            {guessResults.length === 1
              ? " 1 guess"
              : ` ${guessResults.length} guesses`}
            .
          </p>
        </Banner>
      )}

      {!won && guessResults.length >= GUESSES_ALLOWED && (
        <Banner status="sad" resetGame={resetGame}>
          <p>
            Sorry, the correct answer was <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
