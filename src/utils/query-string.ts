export function stringify(object: Record<string, any>): string {
  const { squares } = object
  return `squares=${JSON.stringify(squares)}`
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
