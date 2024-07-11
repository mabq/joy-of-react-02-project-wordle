import React from "react";

import { GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {range(GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guessResult={guessResults[num]} />
      ))}
    </div>
  );
}

function Guess({ guessResult }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guessResult?.[num].letter}
          status={guessResult?.[num].status}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

export default GuessResults;
