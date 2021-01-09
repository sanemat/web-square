import { Square } from "./square"
import React from "react"

export function Board({ squares }) {
  return (
    <>
      {squares.map(row => {
        return (
          <div className="board-row">
            {row.map(v => {
              return <Square value={v} />
            })}
          </div>
        )
      })}
    </>
  )
}
