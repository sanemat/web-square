import React from "react"
import styles from "./square.module.css"

export function Square({ value, onClick }) {
  const blackWhite = value === 0 ? styles.squareBlack : styles.squareWhite
  return (
    <button className={`${styles.square} ${blackWhite}`} onClick={onClick} />
  )
}
