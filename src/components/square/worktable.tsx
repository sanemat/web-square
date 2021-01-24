import React, { useState } from "react"
import { Board } from "./board"
import styles from "./worktable.module.css"

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

  const current = history[history.length - 1]
  return (
    <div className={styles.worktable}>
      <div className={styles.worktableBoard}>
        <Board
          squares={current.squares}
          onClick={(x, y) => clickSquare(x, y, history, setHistory)}
        />
      </div>
      <div className={styles.worktableEditable}>
        <textarea
          value={JSON.stringify(current.squares, null)}
          onChange={ev => {
            let squares
            try {
              // NOTE: validate values, 0 or 1, column count, row count
              squares = JSON.parse(ev.target.value)
              setHistory([...history, { squares: squares }])
            } catch (e) {
              console.error(e)
            }
          }}
        />
      </div>
    </div>
  )
}

// NOTE: stub useState?
function clickSquare(x, y, history, setHistory) {
  // got x and y clicked
  const current = history[history.length - 1]
  const squares = current.squares.slice()
  squares[y][x] === 0 ? (squares[y][x] = 1) : (squares[y][x] = 0)
  setHistory([...history, { squares }])
}
