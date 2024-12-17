import DecoderRing from './DecoderRing'
import MorseCode, { morseCode } from './MorseCode';
import Game from './Game';

function App() {

console.log(morseCode)
  return (
    <>
      <Game />
      <MorseCode />
      <DecoderRing />

    </>
  )
}

export default App
