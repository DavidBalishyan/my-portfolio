import React, { useState } from 'react';

const games = [
  { name: 'Bloxd.io', image: 'https://placehold.co/300x200?text=Bloxd.io', link: 'https://www.crazygames.com/embed/bloxdhop-io' },
  { name: 'Chess', image: 'https://placehold.co/300x200?text=Chess', link: '/play/chess' },
  { name: 'Sudoku', image: 'https://placehold.co/300x200?text=Sudoku', link: '/play/sudoku' },
];

const GamePicker: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">🎮 Choose a Game</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
          <div
            key={game.name}
            className={`card cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 ${
              selectedGame === game.name ? 'border-4 border-primary' : ''
            }`}
            onClick={() => setSelectedGame(game.name)}
          >
            <figure>
              <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{game.name}</h2>
              <div className="card-actions justify-center mt-4">
                <a href={game.link} className="btn btn-primary">
                  Play
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="mt-8 text-center">
          <p className="text-xl">
            You selected: <span className="font-bold text-primary">{selectedGame}</span>
          </p>
        </div>
      )}
    </div>
    
  );
};

export default GamePicker;