import React from "react"
import { Worktable } from "../components/square/worktable"
import { Header } from "../components/header"

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
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          Matt
        </footer>
      </div>
    </>
  )
}
