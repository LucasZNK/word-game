import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import SearchForm from "../SearchForm/SearchForm";
import GuessResults from "../GuessResults/GuessResults";
import ResultBanner from "../ResultBanner/ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Confetti from "react-confetti";

const answer = sample(WORDS);

function Game() {
  const [guessCollection, setGuessCollection] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [win, setWin] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(NUM_OF_GUESSES_ALLOWED);

  return (
    <>
      <GuessResults answer={answer} guessCollection={guessCollection} />
      <SearchForm
        gameFinished={gameFinished}
        guessCollection={guessCollection}
        setGuessCollection={setGuessCollection}
        setGameFinished={setGameFinished}
        setAttemptsLeft={setAttemptsLeft}
        attemptsLeft={attemptsLeft}
        answer={answer}
        setWin={setWin}
      />
      <p>Attempts left: {attemptsLeft} </p>

      {gameFinished && (
        <>
          {win && <Confetti />}
          <ResultBanner
            win={win}
            answer={answer}
            attemptsLeft={attemptsLeft}
            setAttemptsLeft={setAttemptsLeft}
          />
        </>
      )}
    </>
  );
}

export default Game;
