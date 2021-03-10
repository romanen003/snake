import React from 'react';
import './App.css';
import {SnakeGame} from "./pages/snake-game";
import { DEFAULT_GRID_SIZE } from "./pages/snake-game/constants";

function App() {
  return (
      <SnakeGame gridSize={DEFAULT_GRID_SIZE} />
  );
}

export default App;
