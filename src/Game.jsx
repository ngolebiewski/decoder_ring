import { useState } from 'react';
import { morseCode } from './MorseCode';

const Game = () => {
  const [letter, setLetter] = useState("");
  const [code, setCode] = useState("");
  const keys = Object.keys(morseCode);

  // Function to get a random letter and its Morse code
  const getRandomGlyph = () => {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setLetter(randomKey);
    setCode(morseCode[randomKey]);
    console.log(`Random letter: ${randomKey}, Code: ${morseCode[randomKey]}`);
  };

  return (
    <>
      <h1>GAME</h1>
      <button onClick={getRandomGlyph}>Next Letter</button>
      <h2>Letter: {letter}</h2>
      <h2>Symbol: {code}</h2>
    </>
  );
};

export default Game;
