export function stringify<string>(object: Record<string, any>) {
  return "foo bar"
}

export function parse(query: string): { squares?: number[][] } {
  const searchParams = new URLSearchParams(query)
  if (!searchParams.has("squares")) {
    return {}
  }
  const squaresQuery = searchParams.get("squares")
  const squares: number[][] = JSON.parse(squaresQuery)
  return {
    squares,
  }
}
