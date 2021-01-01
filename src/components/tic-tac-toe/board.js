import React from "react"
import { Square } from "./square"

export function Board({ squares, onClick }) {
  return (
    <div>
      <div className="board-row">
        {renderSquare(0, squares, onClick)}
        {renderSquare(1, squares, onClick)}
        {renderSquare(2, squares, onClick)}
      </div>
      <div className="board-row">
        {renderSquare(3, squares, onClick)}
        {renderSquare(4, squares, onClick)}
        {renderSquare(5, squares, onClick)}
      </div>
      <div className="board-row">
        {renderSquare(6, squares, onClick)}
        {renderSquare(7, squares, onClick)}
        {renderSquare(8, squares, onClick)}
      </div>
    </div>
  )
}

function renderSquare(i, squares, onClick) {
  return <Square value={squares[i]} onClick={() => onClick(i)} />
}
