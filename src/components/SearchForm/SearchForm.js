import React, { useState } from "react";

function SearchForm({
  guessCollection,
  setGuessCollection,
  gameFinished,
  setGameFinished,
  answer,
  setAttemptsLeft,
  attemptsLeft,
  setWin,
}) {
  let initialGuess = "";
  const [wordGuess, setWordGuess] = useState(initialGuess);

  function handleSubmit(e) {
    e.preventDefault();

    if (wordGuess.length !== 5) {
      return;
    }

    let guessResult = {
      id: Math.random(),
      word: wordGuess,
    };

    const newGuesses = [...guessCollection, guessResult];
    setGuessCollection(newGuesses);
    setWordGuess(initialGuess);
    setAttemptsLeft(attemptsLeft - 1);

    if (attemptsLeft === 1) {
      setGameFinished(true);
    }

    if (answer === wordGuess) {
      setWin(true);
      setGameFinished(true);
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      {gameFinished ? <p>Game finished</p> : <p>Enter guess:</p>}
      <label htmlFor="input-word">
        <input
          disabled={gameFinished}
          id="input-word"
          value={wordGuess}
          type="text"
          onChange={(e) => {
            const newKey = e.target.value.toUpperCase().trim();
            setWordGuess(newKey);
          }}
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          title="Enter a min 5 letter word"
          required
        />
      </label>
    </form>
  );
}

export default SearchForm;
