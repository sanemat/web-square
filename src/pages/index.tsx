import React from "react"
import { Worktable } from "../components/square/worktable"
import { Header } from "../components/header"
import styles from "./index.module.css"

export default function IndexPage() {
  return (
    <>
      <Header siteTitle={`Square Supporter`} />
      <div className={styles.main}>
        <main>
          <Worktable />
        </main>
        <footer className={styles.footer}>Matt</footer>
      </div>
    </>
  )
}
