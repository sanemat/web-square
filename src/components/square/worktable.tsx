import React from "react"

export function Worktable() {
  return (
    <div className="worktable">
      <div className="worktable-board">
        <Board></Board>
      </div>
    </div>
  )
}

function Board({ squares }) {
  return (
    <>
      <div className="board-row">
        <Square value="0" />
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
        <Square value="7" />
      </div>
    </>
  )
}

function Square({ value }) {
  return <button className="square">{value}</button>
}
