import _React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
// import * as THREE from "three";

// Define the game states
enum Player {
  NONE = 0,
  X = 1,
  O = 2,
}

const Game = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(Player.NONE));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.X);
  const [winner, setWinner] = useState<Player>(Player.NONE);

  // Handle cell click
  const handleCellClick = (index: number) => {
    if (board[index] === Player.NONE && winner === Player.NONE) {
      const newBoard = board.slice();
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === Player.X ? Player.O : Player.X);
      checkWinner(newBoard);
    }
  };

  // Check for winner
  const checkWinner = (board: Player[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== Player.NONE && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (board.every(cell => cell !== Player.NONE)) {
      setWinner(Player.NONE); // It's a tie
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(Player.NONE));
    setCurrentPlayer(Player.X);
    setWinner(Player.NONE);
  };

  // Render a cell
  const renderCell = (index: number, position: [number, number, number]) => {
    const cellValue = board[index];
    let cellColor = "white";

    if (cellValue === Player.X) {
      cellColor = "blue";
    } else if (cellValue === Player.O) {
      cellColor = "red";
    }

    return (
      <mesh
        key={index}
        position={position}
        onClick={() => handleCellClick(index)}
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={cellColor} />
        {cellValue !== Player.NONE && (
          <Text
            color="white"
            fontSize={0.5}
            position={[0, 0, 0.6]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {cellValue === Player.X ? "X" : "O"}
          </Text>
        )}
      </mesh>
    );
  };

  return (
    <div className="h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 50 }}
        style={{ background: "#87CEEB" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 7.5]}
          intensity={1}
          castShadow
        />

        {/* Game Board */}
        <group>
          {board.map((_, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            const position: [number, number, number] = [col - 1, 0, row - 1];
            return renderCell(index, position);
          })}
        </group>

        {/* Display Winner */}
        {winner !== Player.NONE && (
          <Text
            color="black"
            fontSize={0.5}
            position={[0, 2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {winner === Player.NONE ? "It's a tie!" : `Player ${winner === Player.X ? "X" : "O"} wins!`}
          </Text>
        )}

        {/* Controls */}
        <OrbitControls maxPolarAngle={Math.PI / 2} />

        {/* Reset Button */}
        <mesh
          position={[0, 0, 3]}
          onClick={resetGame}
          castShadow
        >
          <boxGeometry args={[2, 0.5, 1]} />
          <meshStandardMaterial color="green" />
          <Text color="white" fontSize={0.3} position={[0, 0, 0.6]}>
            Reset
          </Text>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Game;
