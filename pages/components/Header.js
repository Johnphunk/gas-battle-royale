import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
        Gas Battle Royale ⛽
      </h1>
      <ConnectButton />
    </div>
  );
}
