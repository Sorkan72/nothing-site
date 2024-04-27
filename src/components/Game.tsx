"use client";

import React, { useState } from "react";

const Game = () => {
  const [grid, setGrid] = useState<Array<(null | "water")[]>>(
    Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => null))
  );

  const handleMouseDown = (x: number, y: number) => {
    const newGrid = [...grid];
    newGrid[y][x] = "water"; // Set initial cell as water
    setGrid(newGrid);
    document.addEventListener("mousemove", handleMouseMove); // Listen for mouse move
    document.addEventListener("mouseup", handleMouseUp); // Listen for mouse release
  };

  const handleMouseMove = (event: MouseEvent) => {
    // Get cell coordinates based on mouse position
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / 20);
    const y = Math.floor((event.clientY - rect.top) / 20);

    // Update cell if within grid bounds
    if (x >= 0 && x < 20 && y >= 0 && y < 20) {
      const newGrid = [...grid];
      newGrid[y][x] = "water"; // Set cell as water
      setGrid(newGrid);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="grid-container w-full h-full flex items-center justify-center">
      {grid.map((row, y) => (
        <div key={y} className="row flex">
          {row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell w-4 h-4 ${
                cell === "water" ? "bg-blue-500" : "bg-gray-200"
              }`}
              onMouseDown={() => handleMouseDown(x, y)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;
