export function stringify(object: Record<string, any>): string {
  const { squares } = object
  return `squares=${squares
    .map(sq => {
      return sq.join("")
    })
    .join("d")}`
}

export function parse(query: string): { squares?: number[][] } {
  const searchParams = new URLSearchParams(query)
  if (!searchParams.has("squares")) {
    return {}
  }
  const squaresQuery = searchParams.get("squares")
  const squares: number[][] = squaresQuery.split("d").map(separated => {
    return separated.split("").map(numString => {
      const ret = parseInt(numString, 10)
      if (isNaN(ret)) {
        throw new Error("invalid parameters")
      }
      return ret
    })
  })
  return {
    squares,
  }
}
