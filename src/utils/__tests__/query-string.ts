import { stringify, parse } from "../query-string"

describe("parse", () => {
  it("parse empty correctly", () => {
    const given = ""
    expect(parse(given)).toEqual({})
  })

  it("parse correctly", () => {
    const given = "?squares=[[0,0,0,1],[0,1,1,1]]"
    const { squares } = parse(given)
    expect(squares).toEqual([
      [0, 0, 0, 1],
      [0, 1, 1, 1],
    ])
  })

  it("parse invalid data", () => {
    const given = "?squares=invalid"
    expect(() => {
      parse(given)
    }).toThrowError(SyntaxError)
  })
})

describe("stringify", () => {
  it("stringify correctly", () => {
    const given = {
      squares: [
        [0, 0, 0],
        [0, 1, 0],
      ],
    }
    expect(stringify(given)).toEqual("squares=[[0,0,0],[0,1,0]]")
  })
})
