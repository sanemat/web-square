import React from "react"
import { Worktable } from "../components/square/worktable"
import { Header } from "../components/header"
import styles from "./index.module.css"
import { parse } from "../utils/query-string"

export default function IndexPage({ location }) {
  const given = parse(location.search)
  return (
    <>
      <Header siteTitle={`Square Supporter`} />
      <div className={styles.main}>
        <main>
          <Worktable given={given} />
        </main>
        <footer className={styles.footer}>Matt</footer>
      </div>
    </>
  )
}
