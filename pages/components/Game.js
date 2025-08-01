import { useState } from 'react';

export default function Game() {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const mockGasPrice = () => {
    const gas = Math.floor(Math.random() * 80) + 10; // 10–90 gwei
    if (guess && !isNaN(guess)) {
      if (guess >= gas) {
        setResult(`✅ Correct! Gas was ${gas} gwei. You guessed ≤ ${guess}.`);
      } else {
        setResult(`❌ Too low! Gas was ${gas} gwei. Your guess was too optimistic.`);
      }
    } else {
      setResult(`Gas in last block: ${gas} gwei`);
    }
  };

  return (
    <div className="bg-black bg-opacity-30 p-8 rounded-2xl max-w-md mx-auto backdrop-blur-sm border border-purple-500">
      <h2 className="text-xl mb-4">Guess the Gas!</h2>
      <p className="text-sm opacity-80 mb-4">
        Enter the lowest base fee (gwei) you think the next block will have.
      </p>

      <input
        type="number"
        placeholder="e.g. 45"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="w-full p-3 rounded bg-indigo-900 text-white mb-4 outline-none border border-purple-600"
      />

      <button
        onClick={mockGasPrice}
        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded font-bold hover:from-cyan-400 hover:to-purple-500 transition"
      >
        Reveal Next Block ⛏️
      </button>

      {result && (
        <div className="mt-6 p-4 bg-black bg-opacity-40 rounded text-sm">
          {result}
        </div>
      )}

      <p className="text-xs mt-4 opacity-60">
        *Demo uses simulated gas prices. Real version will use on-chain data.
      </p>
    </div>
  );
}
