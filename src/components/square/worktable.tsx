import React, { useState } from "react"
import { Board } from "./board"

export function Worktable() {
  // clickSquare then it inverse the value.
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
        <Board
          squares={current.squares}
          onClick={(x, y) => clickSquare(x, y, history, setHistory)}
        />
      </div>
    </div>
  )
}

// NOTE: stub useState?
function clickSquare(x, y, h, setH) {}
