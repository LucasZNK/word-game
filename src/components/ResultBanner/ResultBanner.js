import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function ResultBanner({ win, answer, attemptsLeft }) {
  return (
    <>
      {win ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{NUM_OF_GUESSES_ALLOWED - attemptsLeft} guesses</strong>.
            <strong>WORD OF THE DAY: {answer}</strong>
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong> {answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default ResultBanner;
