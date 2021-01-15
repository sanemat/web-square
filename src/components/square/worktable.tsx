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
        <Editable squares={current.squares} />
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

function Editable({ squares }) {
  return <textarea value={JSON.stringify(squares, null)} onChange={ev => {}} />
}
