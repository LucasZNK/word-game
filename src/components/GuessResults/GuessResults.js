import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessCollection, answer }) {
  const gridRows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {gridRows.map((i) => {
        return <Guess value={guessCollection[i]} answer={answer} key={i} />;
      })}
    </div>
  );
}

export default GuessResults;
