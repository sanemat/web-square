import { Square } from "./square"
import React from "react"
import styles from "./board.module.css"

export function Board({ squares, onClick }) {
  return (
    <>
      {squares.map((row, rowIndex) => {
        return (
          <div className={styles.boardRow} key={`row${rowIndex}`}>
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
