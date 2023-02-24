import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  let cells = range(5);

  let letters =
    value && value.word ? checkGuess(value.word, answer) : undefined;

  return (
    <p className="guess">
      {cells.map((i) => {
        const letter = letters ? letters[i] : undefined;

        return (
          <span key={i} className={`cell ${letter ? letter.status : ""}`}>
            {letter ? letter.letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
