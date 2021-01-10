import { Square } from "./square"
import React from "react"

export function Board({ squares, onClick }) {
  return (
    <>
      {squares.map((row, rowIndex) => {
        return (
          <div className="board-row" key={`row${rowIndex}`}>
            {row.map((v, columnIndex) => {
              return (
                <Square
                  value={v}
                  onClick={() => onClick(columnIndex, rowIndex)}
                  key={`x${columnIndex}y${rowIndex}`}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}
