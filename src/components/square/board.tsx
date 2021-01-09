import { Square } from "./square"
import React from "react"

export function Board({ squares, onClick }) {
  return (
    <>
      {squares.map((row, rowIndex) => {
        return (
          <div className="board-row">
            {row.map((v, columnIndex) => {
              return (
                <Square
                  value={v}
                  onClick={() => onClick(columnIndex, rowIndex)}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}
