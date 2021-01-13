import React from "react"
import styles from "./square.module.css"

export function Square({ value, onClick }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  )
}
