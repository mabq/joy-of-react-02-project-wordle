import React from "react";

import { GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessGrid({ guesses }) {
  return (
    <div className="guess-results">
      {range(GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guesses[num]} />
      ))}
    </div>
  );
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guess?.[num].letter}
          status={guess?.[num].status}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

export default GuessGrid;
