import React from 'react';

interface Game {
    id: string;
    name: string;
}

interface GameLibraryProps {
    games: Game[];
    onGameSelect: (game: Game) => void;
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games, onGameSelect }) => {
    return (
        <div>
            <h1>Game Library</h1>
            <ul>
                {games.map(game => (
                    <li key={game.id} onClick={() => onGameSelect(game)}>
                        {game.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameLibrary;
