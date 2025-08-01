import Head from 'next/head';
import Header from '../components/Header';
import Game from '../components/Game';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gas Battle Royale ⛽</title>
        <meta name="description" content="Predict the lowest gas price in the next Ethereum block!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <Header />
        <div className="mt-16 text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Can You Beat the Gas War?
          </h1>
          <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
            Guess the lowest possible base fee (gwei) in the next Ethereum block. 
            If you're right — and lower than others — you win.
          </p>
          <Game />
        </div>

        <footer className="mt-24 text-center text-sm opacity-60">
          Built for @Ethereum_OS • Simulated MVP • Open Source
        </footer>
      </main>
    </>
  );
}
