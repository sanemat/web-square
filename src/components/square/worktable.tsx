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
  const width = current.squares[0].length
  const height = current.squares.length
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
      <div>
        <label>width</label>
        <input
          type="text"
          value={width}
          onChange={ev => {
            let newWidth
            try {
              newWidth = parseInt(ev.target.value, 10)
              const squares = current.squares.map(row => {
                if (row.length < newWidth) {
                  return row.concat(new Array(newWidth - row.length).fill(1))
                } else {
                  return row.slice(0, newWidth)
                }
              })
              setHistory([...history, { squares }])
            } catch (e) {
              console.error(e)
            }
          }}
        />
      </div>
      <div>
        <label>height</label>
        <input type="text" value={height} onChange={ev => {}} />
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
