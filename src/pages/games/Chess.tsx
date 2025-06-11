import React, { useState } from "react";

const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  Array(8).fill(""),
  Array(8).fill(""),
  Array(8).fill(""),
  Array(8).fill(""),
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const pieceToEmoji: Record<string, string> = {
  r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
  R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙",
};

const Chess: React.FC = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (selected) {
      const newBoard = board.map((r) => [...r]);
      newBoard[row][col] = board[selected.row][selected.col];
      newBoard[selected.row][selected.col] = "";
      setBoard(newBoard);
      setSelected(null);
    } else if (board[row][col]) {
      setSelected({ row, col });
    }
  };

  return (
    <div className="flex justify-center  w-full h-full">
    <div style={{ width: "320px", display: "grid", gridTemplateColumns: "repeat(8, 1fr)" }}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isDark = (rowIndex + colIndex) % 2 === 1;
          const isSelected = selected?.row === rowIndex && selected?.col === colIndex;
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
              style={{
                backgroundColor: isSelected
                  ? "yellow"
                  : isDark
                  ? "#769656"
                  : "#eeeed2",
                color: isDark ? "white" : "black",
                width: "40px",
                height: "40px",
                fontSize: "24px",
                textAlign: "center",
                lineHeight: "40px",
                cursor: "crosshair",
              }}
            >
              {pieceToEmoji[cell] || ""}
            </div>
          );
        })
      )}
    </div>
    </div>
  );
}


export default Chess;