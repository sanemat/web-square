import React from "react"
import { Worktable } from "../components/square/worktable"
import { Header } from "../components/header"
import styles from "./index.module.css"

export default function IndexPage() {
  return (
    <>
      <Header siteTitle={`Square Supporter`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <Worktable />
        </main>
        <footer className={styles.footer}>Matt</footer>
      </div>
    </>
  )
}
