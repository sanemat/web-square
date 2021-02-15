import { invert } from "../invert"

describe("invert", () => {
  it("invert correctly", () => {
    const given = [
      [0, 0, 1],
      [0, 1, 1],
    ]
    expect(invert(given)).toEqual([
      [1, 1, 0],
      [1, 0, 0],
    ])
  })
})
