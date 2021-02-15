export function invert(base: number[][]): number[][] {
  return base.map(first => {
    return first.map(second => {
      return second === 0 ? 1 : 0
    })
  })
}
