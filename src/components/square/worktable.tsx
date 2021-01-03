import React, { useState } from "react"

export function Worktable() {
  const [history, setHistory] = useState([
    {
      squares: [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    },
  ])

  const current = history[0]
  return (
    <div className="worktable">
      <div className="worktable-board">
        <Board squares={current.squares}></Board>
      </div>
    </div>
  )
}

function Board({ squares }) {
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

function Square({ value }) {
  return <button className="square">{value}</button>
}
